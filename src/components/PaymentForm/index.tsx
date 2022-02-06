import * as S from './styles'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import { Error, FormLoading } from 'components/Form'
import Heading from 'components/Heading'
import Button from 'components/Button'

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { AddShoppingCart, ErrorOutline } from '@styled-icons/material-outlined'

import { PaymentIntent, StripeCardElementChangeEvent } from '@stripe/stripe-js'
import { useCart } from 'hooks/use-cart'
import { createPayment, createPaymentIntent } from 'utils/stripe/methods'
import { Session } from 'next-auth'
import { useRouter } from 'next/router'

export type PaymentForm = {
  session: Session
}

const PaymentForm = ({ session }: PaymentForm) => {
  const [error, setError] = useState<string | null>(null)
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState('')
  const [freeGames, setFreeGames] = useState(false)
  const [loading, setLoading] = useState(false)
  const { push } = useRouter()
  const { items } = useCart()
  const stripe = useStripe()
  const elements = useElements()

  useEffect(() => {
    async function setPaymentMode() {
      if (items.length) {
        // bater na API /orders/create-payment-intent
        setFreeGames(false)
        const data = await createPaymentIntent({
          items,
          jwt: session.jwt as string
        })

        //se eu receber freeGames: true => setFreeGames
        // faço o fluxo de jogo gratuito
        if (data.freeGames) {
          setFreeGames(true)
          return
        }

        //se eu receber um erro
        //setError
        if (data.error) {
          setError(data.error)
          return
        } else {
          // senão o paymentIntent foi valido
          // setClientSecret
          setClientSecret(data.client_secret)
        }
      }
    }

    setPaymentMode()
  }, [items, session])

  const handleChange = async (event: StripeCardElementChangeEvent) => {
    setError(event.error ? event.error.message : '')
    setDisabled(event.empty)
    console.log(clientSecret)
  }

  const saveOrder = async (paymentIntent?: PaymentIntent) => {
    const data = await createPayment({
      items,
      jwt: session.jwt as string,
      paymentIntent
    })
    console.log(data)
    return data
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    // se for freeGames
    // salva no banco
    // redireciona para success

    if (freeGames) {
      saveOrder()
      push('/success')
      return
    }

    const result = await stripe!.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements!.getElement(CardElement)!
      }
    })

    if (result.error) {
      setError(`Payment failed ${result.error.message}`)
      setLoading(false)
    } else {
      setError(null)
      setLoading(false)

      // salvar a compra no banco do Strapi
      saveOrder(result.paymentIntent)
      // redirectionar para a página de Sucesso
      push('/success')
    }
  }

  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit}>
        <S.Body>
          <Heading color="black" lineBottom size="small">
            Payment
          </Heading>
          {freeGames ? (
            <S.FreeGames>
              So jogos gratuitos clique em comprar e se divirta
            </S.FreeGames>
          ) : (
            <CardElement
              options={{
                hidePostalCode: true,
                style: {
                  base: {
                    fontSize: '16px'
                  }
                }
              }}
              onChange={handleChange}
            />
          )}

          {error && (
            <Error>
              <ErrorOutline size={20} />
              {error}
            </Error>
          )}
        </S.Body>

        <S.Footer>
          <Link href="/games" passHref>
            <Button as="a" minimal>
              Continue shopping
            </Button>
          </Link>

          <Button
            icon={loading ? <FormLoading /> : <AddShoppingCart />}
            disabled={!freeGames && (!!error || disabled)}
          >
            {!loading && <span>Buy now</span>}
          </Button>
        </S.Footer>
      </form>
    </S.Wrapper>
  )
}

export default PaymentForm

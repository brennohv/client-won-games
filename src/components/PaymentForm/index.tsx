import * as S from './styles'

import { useEffect, useState } from 'react'
import Link from 'next/link'

import { Error } from 'components/Form'
import Heading from 'components/Heading'
import Button from 'components/Button'

import { CardElement } from '@stripe/react-stripe-js'
import { AddShoppingCart, ErrorOutline } from '@styled-icons/material-outlined'

import { StripeCardElementChangeEvent } from '@stripe/stripe-js'
import { useCart } from 'hooks/use-cart'
import { createPaymentIntent } from 'utils/stripe/methods'
import { Session } from 'next-auth'

export type PaymentForm = {
  session: Session
}

const PaymentForm = ({ session }: PaymentForm) => {
  const [error, setError] = useState<string | null>(null)
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState('')
  const [freeGames, setFreeGames] = useState(false)
  const { items } = useCart()

  useEffect(() => {
    async function setPaymentMode() {
      if (items.length) {
        // bater na API /orders/create-payment-intent
        const data = await createPaymentIntent({
          items,
          jwt: session.jwt as string
        })

        //se eu receber freeGames: true => setFreeGames
        // faço o fluxo de jogo gratuito
        if (data.freeGames) {
          setFreeGames(true)
          console.log(data.freeGames)
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
          console.log(data)
        }
      }
    }

    setPaymentMode()
  }, [items, session])

  const handleSubmit = async (event: StripeCardElementChangeEvent) => {
    setError(event.error ? event.error.message : '')
    setDisabled(event.empty)
    console.log(clientSecret, freeGames)
  }

  return (
    <S.Wrapper>
      <S.Body>
        <Heading color="black" lineBottom size="small">
          Payment
        </Heading>

        <CardElement
          options={{
            hidePostalCode: true,
            style: {
              base: {
                fontSize: '16px'
              }
            }
          }}
          onChange={handleSubmit}
        />

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

        <Button icon={<AddShoppingCart />} disabled={!!error || disabled}>
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default PaymentForm

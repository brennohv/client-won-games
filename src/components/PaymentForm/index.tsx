import * as S from './styles'

import { useState } from 'react'
import Link from 'next/link'

import { Error } from 'components/Form'
import Heading from 'components/Heading'
import Button from 'components/Button'

import { CardElement } from '@stripe/react-stripe-js'
import { AddShoppingCart, ErrorOutline } from '@styled-icons/material-outlined'

import { StripeCardElementChangeEvent } from '@stripe/stripe-js'

const PaymentForm = () => {
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (event: StripeCardElementChangeEvent) => {
    setError(event.error ? event.error.message : '')
  }

  return (
    <S.Wrapper>
      <S.Body>
        <Heading color="black" lineBottom size="small">
          Payment
        </Heading>

        <CardElement
          options={{
            hidePostalCode: true
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

        <Button icon={<AddShoppingCart />}>Buy now</Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default PaymentForm

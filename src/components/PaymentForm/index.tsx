import Link from 'next/link'

import * as S from './styles'
import Heading from 'components/Heading'
import Button from 'components/Button'

import { CardElement } from '@stripe/react-stripe-js'
import { AddShoppingCart } from '@styled-icons/material-outlined'

const PaymentForm = () => {
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
        />
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

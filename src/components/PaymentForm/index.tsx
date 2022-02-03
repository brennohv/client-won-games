import Heading from 'components/Heading'
import Button from 'components/Button'
import * as S from './styles'

import { AddShoppingCart } from '@styled-icons/material-outlined'
import Link from 'next/link'

const PaymentForm = () => {
  return (
    <S.Wrapper>
      <S.Body>
        <Heading color="black" lineBottom size="small">
          Payment
        </Heading>
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

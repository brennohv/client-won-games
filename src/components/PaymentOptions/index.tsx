import { Add, AddShoppingCart } from '@styled-icons/material-outlined'
import Heading from 'components/Heading'
import Radio from 'components/Radio'
import Button from 'components/Button'
import * as S from './styles'
import { useState } from 'react'

export type CardProps = {
  flag: string
  img: string
  number: string
}

export type PaymentOptionsProps = {
  cards?: CardProps[]
  handlePayment: () => void
}

const PaymentOptions = ({ cards, handlePayment }: PaymentOptionsProps) => {
  const [checked, setChecked] = useState(false)
  return (
    <S.Wrapper>
      <S.Body>
        <Heading color="black" lineBottom size="small">
          Payment
        </Heading>

        <S.CardList>
          {cards?.map((card) => (
            <S.CardInfo key={card.number}>
              <S.Card>
                <S.CardImage src={card.img} alt={card.flag} />
                {card.number}
              </S.Card>
              <Radio
                name="credit-card"
                id={card.number}
                value={card.number}
                onCheck={() => setChecked(true)}
              />
            </S.CardInfo>
          ))}

          <S.NewCreditCard role="button">
            <Add size={14} aria-label="Add cart" />
            Add a new credit card
          </S.NewCreditCard>
        </S.CardList>
      </S.Body>

      <S.Footer>
        <Button as="a" minimal>
          Continue shopping
        </Button>
        <Button
          icon={<AddShoppingCart />}
          onClick={handlePayment}
          disabled={!checked}
        >
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default PaymentOptions

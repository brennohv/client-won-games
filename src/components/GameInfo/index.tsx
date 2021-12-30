import Heading from 'components/Heading'
import Button from 'components/Button'
import Ribbon from 'components/Ribbon'
import * as S from './styles'
import { FavoriteBorder } from '@styled-icons/material-outlined'
import formatPrice from 'utils/format-price'
import CartButton from 'components/CartButton'

export type GameInfoProps = {
  id: string
  title: string
  description: string
  price: number
}

const GameInfo = ({ title, description, price, id }: GameInfoProps) => (
  <S.Wrapper>
    <Heading color="black" lineBottom>
      {title}
    </Heading>

    <Ribbon color="secondary">
      {price === 0 ? 'FREE' : formatPrice(price)}
    </Ribbon>

    <S.Description>{description}</S.Description>

    <S.WrapperButton>
      <CartButton id={id} hasText size="large"></CartButton>

      <Button minimal size="large" icon={<FavoriteBorder />}>
        Wishlist
      </Button>
    </S.WrapperButton>
  </S.Wrapper>
)

export default GameInfo

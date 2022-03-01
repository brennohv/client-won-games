import * as S from './styles'
import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'
import CartButton from 'components/CartButton'
import WishlistButton from 'components/WishlistButton'
import formatPrice from 'utils/format-price'

export type GameInfoProps = {
  id: string
  title: string
  description: string
  price: number
}

const GameInfo = ({ title, description, price, id }: GameInfoProps) => (
  <S.Wrapper data-cy="game-info">
    <S.WrapperHeading>
      <Heading color="black" lineBottom>
        {title}
      </Heading>
    </S.WrapperHeading>

    <Ribbon color="secondary">
      {price === 0 ? 'FREE' : formatPrice(price)}
    </Ribbon>

    <S.Description>{description}</S.Description>

    <S.WrapperButton>
      <CartButton id={id} hasText size="large"></CartButton>

      <WishlistButton id={id} hasText size="large"></WishlistButton>
      {/* <Button minimal size="large" icon={<FavoriteBorder />}></Button> */}
    </S.WrapperButton>
  </S.Wrapper>
)

export default GameInfo

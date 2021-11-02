import GameItem, { GameItemProps } from 'components/GameItem'
import * as S from './styles'

export type CartListProps = {
  gamesCart: GameItemProps[]
  total: string
}

const CartList = ({ gamesCart, total }: CartListProps) => (
  <S.Wrapper>
    {gamesCart.map((gameCart) => (
      <GameItem key={gameCart.title} {...gameCart} />
    ))}

    <S.Footer>
      Total:
      <S.Total>{total}</S.Total>
    </S.Footer>
  </S.Wrapper>
)

export default CartList

import GameItem, { GameItemProps } from 'components/GameItem'
import Button from 'components/Button'

import Link from 'next/link'

import * as S from './styles'

export type CartListProps = {
  gamesCart: GameItemProps[]
  total: string
  hasButton?: boolean
}

const CartList = ({ gamesCart, total, hasButton = false }: CartListProps) => (
  <S.Wrapper>
    {gamesCart.map((gameCart) => (
      <GameItem key={gameCart.title} {...gameCart} />
    ))}

    <S.Footer>
      {!hasButton && <span>Total:</span>}
      <S.Total>{total}</S.Total>
      {hasButton && (
        <Link href="/cart" passHref>
          <Button as="a">Buy it now</Button>
        </Link>
      )}
    </S.Footer>
  </S.Wrapper>
)

export default CartList

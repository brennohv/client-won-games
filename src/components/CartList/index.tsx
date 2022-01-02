import GameItem from 'components/GameItem'
import Button from 'components/Button'

import Link from 'next/link'

import * as S from './styles'
import Empty from 'components/Empty'
import { useCart } from 'hooks/use-cart'

export type CartListProps = {
  hasButton?: boolean
}

const CartList = ({ hasButton = false }: CartListProps) => {
  const { total, items } = useCart()
  return (
    <S.Wrapper isEmpty={!items.length}>
      {items.length ? (
        <S.GameList>
          <>
            {items.map((item) => (
              <GameItem key={item.title} {...item} />
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
          </>
        </S.GameList>
      ) : (
        <Empty
          description="Go back to the store and explore games and offers"
          title="You do not have games on cart"
          hasLink
        />
      )}
    </S.Wrapper>
  )
}

export default CartList

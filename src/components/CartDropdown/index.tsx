import CartIcon from 'components/CartIcon'
import CartList from 'components/CartList'
import Dropdown from 'components/Dropdown'
import { GameItemProps } from 'components/GameItem'
import * as S from './styles'

export type CartDropdownProps = {
  gamesCart?: GameItemProps[]
  total?: string
}

const CartDropdown = ({ gamesCart, total }: CartDropdownProps) => (
  <S.Wrapper>
    <Dropdown title={<CartIcon quantity={gamesCart?.length} />}>
      <CartList gamesCart={gamesCart} total={total} hasButton />
    </Dropdown>
  </S.Wrapper>
)

export default CartDropdown
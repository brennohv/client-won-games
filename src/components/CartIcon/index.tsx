import * as S from './styles'
import { ShoppingCart as ShoppinCartIcon } from '@styled-icons/material-outlined/ShoppingCart'

export type CartIconProps = {
  quantity?: number
}

const CartIcon = ({ quantity = 0 }: CartIconProps) => (
  <S.Wrapper>
    {quantity > 0 && <S.Badge aria-label="Quantity">{quantity}</S.Badge>}
    <ShoppinCartIcon aria-label="Shopping cart" />
  </S.Wrapper>
)

export default CartIcon

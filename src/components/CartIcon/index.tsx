import * as S from './styles'
import { ShoppingCart as ShoppinCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { useCart } from 'hooks/use-cart'

const CartIcon = () => {
  const { quantity } = useCart()

  return (
    <S.Wrapper>
      {quantity > 0 && <S.Badge aria-label="Quantity">{quantity}</S.Badge>}
      <ShoppinCartIcon aria-label="Shopping cart" />
    </S.Wrapper>
  )
}

export default CartIcon

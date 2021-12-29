import Button from 'components/Button'
import {
  AddShoppingCart,
  RemoveShoppingCart
} from '@styled-icons/material-outlined'
import { useCart } from 'hooks/use-cart'

export type CartButtonProps = {
  id: string
}

const CartButton = ({ id }: CartButtonProps) => {
  const { isInCart, addToCart, removeFromCart } = useCart()
  return (
    <Button
      icon={
        isInCart(id) ? (
          <RemoveShoppingCart aria-label="remove from cart" />
        ) : (
          <AddShoppingCart aria-label="add to cart" />
        )
      }
      size="small"
      onClick={() => (isInCart(id) ? removeFromCart(id) : addToCart(id))}
    />
  )
}

export default CartButton

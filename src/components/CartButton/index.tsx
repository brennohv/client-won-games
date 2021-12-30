import Button from 'components/Button'
import {
  AddShoppingCart,
  RemoveShoppingCart
} from '@styled-icons/material-outlined'
import { useCart } from 'hooks/use-cart'

export type CartButtonProps = {
  id: string
  hasText?: boolean
  size?: 'large' | 'medium' | 'small'
}

const CartButton = ({
  id,
  hasText = false,
  size = 'small'
}: CartButtonProps) => {
  const { isInCart, addToCart, removeFromCart } = useCart()
  const buttonText = isInCart(id) ? 'Remove from cart' : 'Add to cart'
  return (
    <Button
      icon={
        isInCart(id) ? (
          <RemoveShoppingCart aria-label="remove from cart" />
        ) : (
          <AddShoppingCart aria-label="add to cart" />
        )
      }
      size={size}
      onClick={() => (isInCart(id) ? removeFromCart(id) : addToCart(id))}
    >
      {hasText && buttonText}
    </Button>
  )
}

export default CartButton

import Button, { ButtonProps } from 'components/Button'
import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'
import { useWishlist } from 'hooks/use-wishlist'
import { useSession } from 'next-auth/client'

export type WishlistButtonProps = {
  id: string
  hasText?: boolean
} & Pick<ButtonProps, 'size'>

const WishlistButton = ({ id, hasText, size }: WishlistButtonProps) => {
  const [session] = useSession()
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist()
  const labelButton = isInWishlist(id)
    ? 'Remove from Wishlist'
    : 'Add to Wishlist'

  if (!session) {
    return null
  }
  return (
    <Button
      size={size}
      onClick={() =>
        isInWishlist(id) ? removeFromWishlist(id) : addToWishlist(id)
      }
      minimal
      icon={
        isInWishlist(id) ? (
          <Favorite aria-label={labelButton} />
        ) : (
          <FavoriteBorder aria-label={labelButton} />
        )
      }
    >
      {hasText && labelButton}
    </Button>
  )
}

export default WishlistButton

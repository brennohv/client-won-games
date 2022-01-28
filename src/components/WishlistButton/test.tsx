import { render, screen } from 'utils/test-utils'
import { WishlistContextDefaultValues } from 'hooks/use-wishlist'

import WishlistButton from '.'
import userEvent from '@testing-library/user-event'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useSession = jest.spyOn(require('next-auth/client'), 'useSession')
const session = { jwt: '123', user: { email: 'brennovicentini@gmail.com' } }
useSession.mockImplementation(() => [session])

describe('<WishlistButton />', () => {
  it('should render label add to wishlist when isInWishlist is false', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => false
    }
    render(<WishlistButton id="1" />, { wishlistProviderProps })

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render label remove from wishlist when isInWishlist is true', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => true
    }
    render(<WishlistButton id="1" />, { wishlistProviderProps })

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should render remove text when passed hasText and isInWishlist is true ', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => true
    }
    render(<WishlistButton id="1" hasText />, { wishlistProviderProps })

    expect(screen.getByText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should render add text when passed hasText and isInWishlist is false ', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => false
    }
    render(<WishlistButton id="1" hasText />, { wishlistProviderProps })

    expect(screen.getByText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should not render when is not logged', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const useSession = jest.spyOn(require('next-auth/client'), 'useSession')
    useSession.mockImplementationOnce(() => [null])

    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => false
    }
    render(<WishlistButton id="1" hasText />, { wishlistProviderProps })

    expect(
      screen.queryByLabelText(/remove from wishlist/i)
    ).not.toBeInTheDocument()
  })

  it('should call removeFromWishList method when on the Wishlist', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => true,
      removeFromWishlist: jest.fn()
    }

    render(<WishlistButton id="1" hasText />, { wishlistProviderProps })

    const button = screen.getByLabelText('Remove from Wishlist')
    userEvent.click(button)

    expect(wishlistProviderProps.removeFromWishlist).toHaveBeenCalledWith('1')
  })

  it('should call addToWishlist method when is not on Wishlist', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => false,
      addToWishlist: jest.fn()
    }

    render(<WishlistButton id="1" hasText />, { wishlistProviderProps })

    const button = screen.getByLabelText('Add to Wishlist')
    userEvent.click(button)

    expect(wishlistProviderProps.addToWishlist).toHaveBeenCalledWith('1')
  })
})

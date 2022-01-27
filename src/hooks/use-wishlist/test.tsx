import { MockedProvider } from '@apollo/client/testing'
import { renderHook } from '@testing-library/react-hooks'
import { act, waitFor } from 'utils/test-utils'
import { useWishlist, WishlistProvider, WishlistProviderProps } from '.'
import {
  createWishlist,
  updateWishlist,
  wishlistItems,
  wishlistMock
} from './mock'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useSession = jest.spyOn(require('next-auth/client'), 'useSession')
const session = { jwt: '123', user: { email: 'brennovicentini@gmail.com' } }
useSession.mockImplementation(() => [session])

describe('useWishlist', () => {
  it('should return wishlist items', async () => {
    const wrapper = ({ children }: WishlistProviderProps) => (
      <MockedProvider mocks={[wishlistMock]}>
        <WishlistProvider>{children}</WishlistProvider>
      </MockedProvider>
    )

    const { result, waitForNextUpdate } = renderHook(() => useWishlist(), {
      wrapper
    })

    expect(result.current.loading).toBe(true)

    await waitForNextUpdate()

    expect(result.current.items).toEqual([
      wishlistItems['0'],
      wishlistItems['1']
    ])
  })

  it('should return true when item is in wishlist or false when is not in wishlist ', async () => {
    const wrapper = ({ children }: WishlistProviderProps) => (
      <MockedProvider mocks={[wishlistMock]}>
        <WishlistProvider>{children}</WishlistProvider>
      </MockedProvider>
    )

    const { result, waitForNextUpdate } = renderHook(() => useWishlist(), {
      wrapper
    })

    await waitForNextUpdate()

    expect(result.current.isInWishlist('1')).toBe(true)
    expect(result.current.isInWishlist('2')).toBe(true)
    expect(result.current.isInWishlist('3')).toBe(false)
  })

  it('should create wishlist when clicked addToWishlist if dont have wishlist ', async () => {
    const wrapper = ({ children }: WishlistProviderProps) => (
      <MockedProvider mocks={[createWishlist]}>
        <WishlistProvider>{children}</WishlistProvider>
      </MockedProvider>
    )

    const { result, waitForNextUpdate } = renderHook(() => useWishlist(), {
      wrapper
    })
    await waitForNextUpdate()

    act(() => {
      result.current.addToWishlist('1')
    })

    await waitFor(() => {
      expect(result.current.items).toStrictEqual([wishlistItems[0]])
    })
  })

  it('should update wishlist when clicked addToWishlist', async () => {
    const wrapper = ({ children }: WishlistProviderProps) => (
      <MockedProvider mocks={[wishlistMock, updateWishlist]}>
        <WishlistProvider>{children}</WishlistProvider>
      </MockedProvider>
    )

    const { result, waitForNextUpdate } = renderHook(() => useWishlist(), {
      wrapper
    })
    await waitForNextUpdate()

    act(() => {
      result.current.addToWishlist('3')
    })

    await waitFor(() => {
      expect(result.current.items).toStrictEqual(wishlistItems)
    })
  })
})

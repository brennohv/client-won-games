import React, { createContext, useContext } from 'react'
import { useSession } from 'next-auth/client'

import { GameCardProps } from 'components/GameCard'
import { wishlistMapper } from 'utils/mappers'

import { useQueryWishlist } from 'graphql/queries/wishlist'

export type WishlistContextData = {
  items: GameCardProps[]
  loading: boolean
  isInWishlist: (id: string) => boolean
  addToWishlist: (id: string) => void
  removeFromWishlist: (id: string) => void
}

export const WishlistContextDefaultValues = {
  items: [],
  loading: false,
  isInWishlist: () => false,
  addToWishlist: () => null,
  removeFromWishlist: () => null
}

export const WishlistContext = createContext<WishlistContextData>(
  WishlistContextDefaultValues
)

export type WishlistProviderProps = {
  children: React.ReactNode
}

const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const [session] = useSession()

  const { data, loading } = useQueryWishlist({
    skip: !session?.user?.email,
    context: { session },
    variables: {
      identifier: session?.user?.email as string
    }
  })

  console.log(data?.wishlists[0].games)

  return (
    <WishlistContext.Provider
      value={{
        items: wishlistMapper(data?.wishlists[0].games),
        loading,
        isInWishlist: () => false,
        addToWishlist: () => null,
        removeFromWishlist: () => null
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

const useWishlist = () => useContext(WishlistContext)

export { WishlistProvider, useWishlist }

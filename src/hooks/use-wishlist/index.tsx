import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'
import { useSession } from 'next-auth/client'

import { GameCardProps } from 'components/GameCard'
import { wishlistMapper } from 'utils/mappers'

import { useQueryWishlist } from 'graphql/queries/wishlist'
import { QueryWishlists_wishlists_games } from 'graphql/generated/QueryWishlists'
import { useMutation } from '@apollo/client'
import {
  MUTATION_CREATE_WISHLIST,
  MUTATION_UPDATE_WISHLIST
} from 'graphql/mutations/wishlist'

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
  const [wishListIdUser, setWishListIdUser] = useState<string | null>()
  const [wishlistItems, setWishlistItems] = useState<
    QueryWishlists_wishlists_games[]
  >([])

  const [createWishlist] = useMutation(MUTATION_CREATE_WISHLIST, {
    context: { session },
    onCompleted: (data) => {
      setWishlistItems(data?.createWishlist?.wishlist?.games)
    }
  })

  const [updateWishlist] = useMutation(MUTATION_UPDATE_WISHLIST, {
    context: { session },
    onCompleted: (data) => {
      setWishlistItems(data.updateWishlist?.wishlist?.games)
    }
  })

  const { data, loading } = useQueryWishlist({
    skip: !session?.user?.email,
    context: { session },
    variables: {
      identifier: session?.user?.email as string
    }
  })
  // console.log(data?.wishlists[0])
  useEffect(() => {
    setWishlistItems(data?.wishlists[0]?.games || [])
    setWishListIdUser(data?.wishlists[0]?.id)
  }, [data])

  const isInWishlist = (id: string) =>
    !!wishlistItems.find((game) => game.id === id)

  const idGamesAntigos = useMemo(
    () => wishlistItems.map((games) => games.id),
    [wishlistItems]
  )

  const addToWishlist = (id: string) => {
    if (!wishListIdUser) {
      return createWishlist({
        variables: {
          input: { data: { games: [id] } }
        }
      })
    }
    return updateWishlist({
      variables: {
        input: {
          where: {
            id: wishListIdUser
          },
          data: {
            games: [...idGamesAntigos, id]
          }
        }
      }
    })
  }

  return (
    <WishlistContext.Provider
      value={{
        items: wishlistMapper(wishlistItems),
        loading,
        isInWishlist,
        addToWishlist,
        removeFromWishlist: () => null
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

const useWishlist = () => useContext(WishlistContext)

export { WishlistProvider, useWishlist }

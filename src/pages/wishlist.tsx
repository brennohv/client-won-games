import Wishlist, { WishlistProps } from 'templates/Wishlist'

import { initializeApollo } from 'utils/apollo'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { gamesMapper, highlightMapper } from 'utils/mappers'
import { GetServerSidePropsContext } from 'next'
import protectedRoutes from 'utils/protected-routes'
import {
  QueryWishlists,
  QueryWishlistsVariables
} from 'graphql/generated/QueryWishlists'
import { QUERY_WISHLIST } from 'graphql/queries/wishlist'

export default function WishlistPage(props: WishlistProps) {
  return <Wishlist {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloCliente = initializeApollo(null, session)

  if (!session) {
    return { props: {} }
  }

  await apolloCliente.query<QueryWishlists, QueryWishlistsVariables>({
    query: QUERY_WISHLIST,
    variables: {
      identifier: session?.user?.email as string
    }
  })

  const {
    data: { recommended }
  } = await apolloCliente.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      session,
      initialApolloState: apolloCliente.cache.extract(),
      recomendedGames: gamesMapper(recommended?.section?.games),
      recomendedHighlight: highlightMapper(recommended?.section?.highlight),
      title: recommended?.section?.title
    }
  }
}

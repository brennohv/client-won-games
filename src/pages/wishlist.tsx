import Wishlist, { WishlistProps } from 'templates/Wishlist'
import gameCardMock from 'components/GameCardSlider/mock'

import { initializeApollo } from 'utils/apollo'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { gamesMapper, highlightMapper } from 'utils/mappers'
import { GetServerSidePropsContext } from 'next'
import protectedRoutes from 'utils/protected-routes'

export default function WishlistPage(props: WishlistProps) {
  return <Wishlist {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloCliente = initializeApollo()
  const {
    data: { recommended }
  } = await apolloCliente.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      recomendedGames: gamesMapper(recommended?.section?.games),
      recomendedHighlight: highlightMapper(recommended?.section?.highlight),
      games: gameCardMock,
      title: recommended?.section?.title,
      session
    }
  }
}

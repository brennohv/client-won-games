import Games, { GamesTemplateProps } from 'templates/Games'
import ExploreMock from 'components/ExploreSidebar/mock'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
import { initializeApollo } from 'utils/apollo'
import { QUERY_GAMES } from 'graphql/queries/games'

export default function GamesPage(props: GamesTemplateProps) {
  return <Games {...props} />
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  return {
    props: {
      revalidate: 60,
      games: data.games.map((game) => ({
        slug: game.slug,
        title: game.name,
        developers: game.developers[0].name,
        img: `http://localhost:1337${game.cover!.url}`,
        price: new Intl.NumberFormat('en', {
          style: 'currency',
          currency: 'EUR'
        }).format(game.price)
      })),
      filterItems: ExploreMock
    }
  }
}

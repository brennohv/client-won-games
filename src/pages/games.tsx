import Games, { GamesTemplateProps } from 'templates/Games'
import ExploreMock from 'components/ExploreSidebar/mock'
import { initializeApollo } from 'utils/apollo'
import { QUERY_GAMES } from 'graphql/queries/games'
import { GamesAPI } from 'types/api'

export default function GamesPage(props: GamesTemplateProps) {
  return <Games {...props} />
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  return {
    props: {
      revalidate: 60,
      games: data.games.map((game: GamesAPI) => ({
        title: game.name,
        developers: game.developers[0].name,
        img: `http://localhost:1337${game.cover.url}`,
        price: new Intl.NumberFormat('en', {
          style: 'currency',
          currency: 'EUR'
        }).format(game.price)
      })),
      filterItems: ExploreMock
    }
  }
}

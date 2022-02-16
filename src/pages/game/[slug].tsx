import Game, { GameTemplateProps } from 'templates/Game'
import { initializeApollo } from 'utils/apollo'
import { useRouter } from 'next/router'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
import { QUERY_GAMES, QUERY_GAMES_BY_SLUG } from 'graphql/queries/games'
import { GetStaticProps } from 'next'
import {
  QueryGameBySlug,
  QueryGameBySlugVariables
} from 'graphql/generated/QueryGameBySlug'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { gamesMapper, highlightMapper } from 'utils/mappers/index'
import {
  QueryUpComingGames,
  QueryUpComingGamesVariables
} from 'graphql/generated/QueryUpComingGames'
import { QUERY_UPCOMING } from 'graphql/queries/upComing'
import { getImageUrl } from 'utils/getImageUrl'

const apolloClient = initializeApollo()
const TODAY = new Date().toISOString().slice(0, 10)

export default function Index(props: GameTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return <Game {...props} />
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  const paths = data.games.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<
    QueryGameBySlug,
    QueryGameBySlugVariables
  >({
    query: QUERY_GAMES_BY_SLUG,
    variables: { slug: `${params?.slug}` },
    fetchPolicy: 'no-cache' // garatimos que nao guarde os dados no cache e sempre gere um estatico novo
  })

  if (!data.games.length) {
    return { notFound: true }
  }

  const game = data.games[0]

  const {
    data: { recommended }
  } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  const {
    data: { upcomingGames, showCase }
  } = await apolloClient.query<QueryUpComingGames, QueryUpComingGamesVariables>(
    {
      query: QUERY_UPCOMING,
      variables: { date: TODAY }
    }
  )

  return {
    revalidate: 60,
    props: {
      cover: `${getImageUrl(game.cover?.src)}`,
      gameInfo: {
        id: game.id,
        title: game.name,
        description: game.short_description,
        price: game.price
      },
      gallery: game.gallery.map((image) => ({
        src: `${getImageUrl(image.src)}`,
        label: image.label
      })),
      description: game.description,
      gameDetails: {
        developer: game.developers[0].name,
        releaseDate: game.release_date,
        platforms: game.platforms.map((platform) => platform.name),
        publisher: game.publisher?.name,
        rating: game.rating,
        genres: game.categories.map((category) => category.name)
      },
      upComingHighligth: highlightMapper(showCase?.upcomingGames?.highlight),
      upComingGames: gamesMapper(upcomingGames),
      titleUpcoming: showCase?.upcomingGames?.title,
      gameSuggestion: gamesMapper(recommended?.section?.games),
      titleRecommended: recommended?.section?.title
    }
  }
}

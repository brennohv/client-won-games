import Home, { HomeTemplateProps } from 'templates/Home'
import gameCardMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import { QueryHome } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'
import { initializeApollo } from 'utils/apollo'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}
//ATENÇÃO:
// Os METODOS GetStaticProps e GetServerSideProps SÓ FUNCIONAM EM PAGES

// getStaticProps => gerar estático em build time (gatsby)
// getServerSideProps => gerar via ssr a cada request (nunca vai para o bundle do client)
// getInitialProps => gerar via ssr a cada request (vai para o client, faz hydrate do lado do client depois do 1 req)

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const {
    data: { banners, newGames }
  } = await apolloClient.query<QueryHome>({
    query: QUERY_HOME
  })

  return {
    props: {
      revalidate: 10,
      banners: banners.map((banner) => ({
        img: `http://localhost:1337${banner.image?.url}`,
        title: banner.title,
        subtitle: banner.subtitle,
        buttonLabel: banner.button?.label,
        buttonLink: banner.button?.link,
        ...(!!banner.ribbon && {
          ribbon: banner.ribbon.text,
          ribbonSize: banner.ribbon.size,
          ribbonColor: banner.ribbon.color
        })
      })),
      newGames: newGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price
      })),
      mostPopularHighlight: highlightMock,
      mostPopularGames: gameCardMock,
      upComingGames: gameCardMock,
      upComingHighlight: highlightMock,
      upComingMoreGames: gameCardMock,
      freeGames: gameCardMock,
      freeGamesHighlight: highlightMock
    }
  }
}

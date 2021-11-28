import Home, { HomeTemplateProps } from 'templates/Home'
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
    data: { banners, newGames, upcomingGames, freeGames, sections }
  } = await apolloClient.query<QueryHome>({
    query: QUERY_HOME
  })

  console.log(sections?.popularGames?.highlight)

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
      newGames: newGames.map((newgame) => ({
        title: newgame.name,
        slug: newgame.slug,
        developer: newgame.developers[0].name,
        img: `http://localhost:1337${newgame.cover?.url}`,
        price: newgame.price
      })),
      newGamesTitle: sections?.newGames?.title,
      mostPopularHighlight: highlightMock,
      mostPopularGames: sections?.popularGames?.games.map((popularGames) => ({
        title: popularGames.name,
        slug: popularGames.slug,
        developer: popularGames.developers[0].name,
        img: `http://localhost:1337${popularGames.cover?.url}`,
        price: popularGames.price
      })),
      mostPopularGamesTitle: sections?.popularGames?.title,
      upComingGames: upcomingGames.map((upComingGame) => ({
        title: upComingGame.name,
        slug: upComingGame.slug,
        developer: upComingGame.developers[0].name,
        img: `http://localhost:1337${upComingGame.cover?.url}`,
        price: upComingGame.price
      })),
      upComingHighlight: highlightMock,
      upcomingTitle: sections?.upcomingGames?.title,
      freeGames: freeGames.map((freeGame) => ({
        title: freeGame.name,
        slug: freeGame.slug,
        developer: freeGame.developers[0].name,
        img: `http://localhost:1337${freeGame.cover?.url}`,
        price: freeGame.price
      })),
      freeGamesHighlight: highlightMock,
      freeGamesTitle: sections?.freeGames?.title
    }
  }
}

// export default {
//   title: 'Read Dead it’s back',
//   subtitle: 'Come see John’s new adventures',
//   backgroundImage: '/img/background.png',
//   buttonLabel: 'Buy now',
//   buttonLink: '/rdr2'
// }

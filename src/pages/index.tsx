import Home, { HomeTemplateProps } from 'templates/Home'
import bannersMock from 'components/BannerSlider/mock'
import gameCardMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}
//ATENÇÃO:
// Os METODOS GetStaticProps e GetServerSideProps SÓ FUNCIONAM EM PAGES

// getStaticProps => gera o estatico em build time
// getServerSideProps => gera via ssr a cada request
// getInitialProps => gera via ssr a cada request

export function getStaticProps() {
  // Faz a logica
  // Pode sbuscar dados numa API
  // Fazer calculo/ leitura de context

  // retorno dos dados
  return {
    props: {
      banners: bannersMock,
      newGames: gameCardMock,
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

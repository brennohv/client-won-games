import Wishlist, { WishlistProps } from 'templates/Wishlist'
import highlightMock from 'components/Highlight/mock'
import gameCardMock from 'components/GameCardSlider/mock'

export default function WishlistPage(props: WishlistProps) {
  return <Wishlist {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      recomendedGames: gameCardMock.slice(0, 5),
      recomendedHighlight: highlightMock,
      games: gameCardMock
    }
  }
}

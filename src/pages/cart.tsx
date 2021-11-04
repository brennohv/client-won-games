import Cart, { CartProps } from 'templates/Cart'
import highlightMock from 'components/Highlight/mock'
import moreGamesMock from 'components/GameCardSlider/mock'
import gamesCartMock from 'components/CartList/mock'
import cardsMock from 'components/PaymentOptions/mock'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      recommendedHighlight: highlightMock,
      recommendedGames: moreGamesMock,
      gamesCart: gamesCartMock,
      total: '$430,00',
      cards: cardsMock
    }
  }
}

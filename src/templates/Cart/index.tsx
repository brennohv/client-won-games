import CartList, { CartListProps } from 'components/CartList'
import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import Empty from 'components/Empty'
import { GameCardProps } from 'components/GameCard'

import Heading from 'components/Heading'
import { HighlightProps } from 'components/Highlight'
import PaymentOptions, { PaymentOptionsProps } from 'components/PaymentOptions'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'
import * as S from './styles'

export type CartProps = {
  recommendedHighlight: HighlightProps
  recommendedGames: GameCardProps[]
} & CartListProps &
  Pick<PaymentOptionsProps, 'cards'>

const Cart = ({
  recommendedHighlight,
  recommendedGames,
  gamesCart,
  total,
  cards
}: CartProps) => {
  const handlePayment = () => ({})

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My cart
        </Heading>
        {gamesCart.length ? (
          <S.Content>
            <CartList gamesCart={gamesCart} total={total} />
            <PaymentOptions cards={cards} handlePayment={handlePayment} />
          </S.Content>
        ) : (
          <Empty
            title="No games in the cart"
            description="Add a game to your cart to buy"
            hasLink
          />
        )}

        <Divider />
      </Container>

      <Showcase
        heading="You may like these games"
        highlight={recommendedHighlight}
        gameCardSlider={recommendedGames}
      />
    </Base>
  )
}

export default Cart

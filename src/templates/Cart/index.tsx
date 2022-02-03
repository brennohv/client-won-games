import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import CartList, { CartListProps } from 'components/CartList'
import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import { GameCardProps } from 'components/GameCard'

import Heading from 'components/Heading'
import { HighlightProps } from 'components/Highlight'
import PaymentForm from 'components/PaymentForm'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'
import * as S from './styles'

export type CartProps = {
  recommendedHighlight: HighlightProps
  recommendedGames: GameCardProps[]
  title: string
} & CartListProps

const stripePromise = loadStripe(
  `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`
)

const Cart = ({ recommendedHighlight, recommendedGames, title }: CartProps) => {
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My cart
        </Heading>

        <S.Content>
          <CartList />
          <Elements stripe={stripePromise}>
            <PaymentForm />
          </Elements>
        </S.Content>

        <Divider />
      </Container>

      <Showcase
        heading={title}
        highlight={recommendedHighlight}
        gameCardSlider={recommendedGames}
      />
    </Base>
  )
}

export default Cart

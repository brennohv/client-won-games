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

const Cart = ({ recommendedHighlight, recommendedGames, title }: CartProps) => {
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My cart
        </Heading>

        <S.Content>
          <CartList />
          <PaymentForm />
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

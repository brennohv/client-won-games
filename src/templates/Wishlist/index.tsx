import Showcase from 'components/Showcase'
import Base from 'templates/Base'
import * as S from './styles'
import GameCard, { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import Heading from 'components/Heading'
import { Container } from 'components/Container'

export type WishlistProps = {
  recomendedGames: GameCardProps[]
  recomendedHighlight: HighlightProps
  games?: GameCardProps[]
}

const Wishlist = ({
  recomendedGames,
  recomendedHighlight,
  games
}: WishlistProps) => (
  <Base>
    <Container>
      <S.Wrapper>
        <Heading lineLeft lineColor="secondary">
          Wishlist
        </Heading>

        {games?.map((game, index) => (
          <GameCard favorite key={`Wishlist-${index}`} {...game} />
        ))}
      </S.Wrapper>
    </Container>

    <Showcase
      heading="You may like these games"
      highlight={recomendedHighlight}
      gameCardSlider={recomendedGames}
    ></Showcase>
  </Base>
)

export default Wishlist

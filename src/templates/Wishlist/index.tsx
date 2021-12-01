import Showcase from 'components/Showcase'
import Base from 'templates/Base'
import * as S from './styles'
import GameCard, { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import Heading from 'components/Heading'
import { Container } from 'components/Container'
import { Grid } from 'components/Grid'
import { Divider } from 'components/Divider'
import Empty from 'components/Empty'

export type WishlistProps = {
  recomendedGames: GameCardProps[]
  recomendedHighlight: HighlightProps
  games?: GameCardProps[]
  title: string
}

const Wishlist = ({
  recomendedGames,
  recomendedHighlight,
  games = [],
  title
}: WishlistProps) => (
  <Base>
    <Container>
      <S.Wrapper>
        <Heading lineLeft lineColor="secondary">
          Wishlist
        </Heading>
        {games?.length >= 1 ? (
          <Grid>
            {games?.map((game, index) => (
              <GameCard favorite key={`Wishlist-${index}`} {...game} />
            ))}
          </Grid>
        ) : (
          <Empty
            title="Nenhum resultado encontrado"
            description="Infelizmente nao achamos nenhum resultado para sua busca"
            hasLink
          />
        )}
      </S.Wrapper>
      <Divider />
    </Container>

    <Showcase
      heading={title}
      highlight={recomendedHighlight}
      gameCardSlider={recomendedGames}
    ></Showcase>
  </Base>
)

export default Wishlist

import * as S from './styles'

import Base from 'templates/Base'
import { HighlightProps } from 'components/Highlight'
import { Container } from 'components/Container'
import { Grid } from 'components/Grid'
import { Divider } from 'components/Divider'
import GameCard, { GameCardProps } from 'components/GameCard'
import Heading from 'components/Heading'
import Empty from 'components/Empty'
import Showcase from 'components/Showcase'

import { useWishlist } from 'hooks/use-wishlist'
import Loader from 'components/Loader'

export type WishlistProps = {
  recomendedGames: GameCardProps[]
  recomendedHighlight: HighlightProps
  title: string
}

const Wishlist = ({
  recomendedGames,
  recomendedHighlight,
  title
}: WishlistProps) => {
  const { items, loading } = useWishlist()

  return (
    <Base>
      <Container>
        <S.Wrapper>
          <Heading lineLeft lineColor="secondary">
            Wishlist
          </Heading>

          {loading ? (
            <S.Loading>
              <Loader />
            </S.Loading>
          ) : items.length >= 1 ? (
            <Grid>
              {items?.map((game, index) => (
                <GameCard key={`Wishlist-${index}`} {...game} />
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
}

export default Wishlist

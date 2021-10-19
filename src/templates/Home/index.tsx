import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'

import { Container } from 'components/Container'
import BannerSlider from 'components/BannerSlider'
import * as S from './styles'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upComingGames: GameCardProps[]
  upComingHighlight: HighlightProps
  upComingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeGamesHighlight: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upComingGames,
  upComingHighlight,
  upComingMoreGames,
  freeGames,
  freeGamesHighlight
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider banners={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase heading="News" gameCardSlider={newGames} />
    </S.SectionNews>

    <Showcase
      heading="Most popular"
      highlight={mostPopularHighlight}
      gameCardSlider={mostPopularGames}
    />
    <S.SectionUpcoming>
      <Showcase heading="Upcomming" gameCardSlider={upComingGames} />
      <Showcase
        highlight={upComingHighlight}
        gameCardSlider={upComingMoreGames}
      />
    </S.SectionUpcoming>

    <Showcase
      heading="Free games"
      highlight={freeGamesHighlight}
      gameCardSlider={freeGames}
    />
  </Base>
)

export default Home

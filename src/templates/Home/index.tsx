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
      <Showcase
        heading="News"
        gameCardSlider={newGames}
        gameCardColor="black"
      />
    </S.SectionNews>

    <Showcase
      heading="Most popular"
      highlight={mostPopularHighlight}
      gameCardSlider={mostPopularGames}
    />

    <Showcase
      heading="Upcomming"
      gameCardSlider={upComingGames}
      highlight={upComingHighlight}
    />

    <Showcase
      heading="Free games"
      highlight={freeGamesHighlight}
      gameCardSlider={freeGames}
    />
  </Base>
)

export default Home

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
  newGamesTitle: string
  mostPopularGamesTitle: string
  upcomingTitle: string
  freeGamesTitle: string
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upComingGames,
  upComingHighlight,
  freeGames,
  freeGamesHighlight,
  newGamesTitle,
  mostPopularGamesTitle,
  upcomingTitle,
  freeGamesTitle
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider banners={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase
        heading={newGamesTitle}
        gameCardSlider={newGames}
        gameCardColor="black"
      />
    </S.SectionNews>

    <Showcase
      heading={mostPopularGamesTitle}
      highlight={mostPopularHighlight}
      gameCardSlider={mostPopularGames}
    />

    <Showcase
      heading={upcomingTitle}
      gameCardSlider={upComingGames}
      highlight={upComingHighlight}
    />

    <Showcase
      heading={freeGamesTitle}
      highlight={freeGamesHighlight}
      gameCardSlider={freeGames}
    />
  </Base>
)

export default Home

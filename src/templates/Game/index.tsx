import * as S from './styles'
import Base from 'templates/Base'
import GameInfo, { GameInfoProps } from 'components/GameInfo'
import Gallery, { GalleryImagesProps } from 'components/Gallery'
import TextContend from 'components/TextContent'
import GameDetails, { GameDetailsProps } from 'components/GameDetails'
import Showcase from 'components/Showcase'
import { HighlightProps } from 'components/Highlight'
import { GameCardProps } from 'components/GameCard'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImagesProps[]
  description: string
  gameDetails: GameDetailsProps
  upComingHighligth: HighlightProps
  upComingGames: GameCardProps[]
  gameSuggestion: GameCardProps[]
}

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  gameDetails,
  upComingHighligth,
  upComingGames,
  gameSuggestion
}: GameTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />
    <S.Section>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>

      <S.SectionGallery>
        {!!gallery && <Gallery images={gallery}></Gallery>}
      </S.SectionGallery>

      <S.SectionTextContent>
        <TextContend title="Description" content={description}></TextContend>
      </S.SectionTextContent>

      <S.SectionGameDetails>
        <GameDetails {...gameDetails} />
      </S.SectionGameDetails>
    </S.Section>

    <Showcase
      heading="UpComing"
      highlight={upComingHighligth}
      gameCardSlider={upComingGames}
    />

    <Showcase
      heading="Youmay like these games"
      gameCardSlider={gameSuggestion}
    />
  </Base>
)

export default Game

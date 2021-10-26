import * as S from './styles'
import Base from 'templates/Base'
import GameInfo, { GameInfoProps } from 'components/GameInfo'
import Gallery, { GalleryImagesProps } from 'components/Gallery'
import TextContend from 'components/TextContent'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImagesProps[]
  description: string
}

const Game = ({ cover, gameInfo, gallery, description }: GameTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />
    <S.Container>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>

      <S.SectionGallery>
        {!!gallery && <Gallery images={gallery}></Gallery>}
      </S.SectionGallery>

      <S.SectionTextContent>
        <TextContend title="Description" content={description}></TextContend>
      </S.SectionTextContent>
    </S.Container>
  </Base>
)

export default Game

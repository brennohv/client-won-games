import * as S from './styles'
import MediaMatch from 'components/MediaMatch'
import Heading from 'components/Heading'

const GameDetails = () => (
  <S.Wrapper>
    <MediaMatch greaterThan="small">
      <Heading lineLeft lineColor="secondary">
        Game deatails
      </Heading>
    </MediaMatch>

    <S.Content>
      <S.Block>
        <S.Title>Company</S.Title>
        <S.Description>Gearbox Software</S.Description>
      </S.Block>

      <S.Block>
        <S.Title>Realease date</S.Title>
        <S.Description>Nov 16, 2019</S.Description>
      </S.Block>

      <S.Block>
        <S.Title>Platforms</S.Title>
        <S.Description></S.Description>
      </S.Block>

      <S.Block>
        <S.Title>Editor</S.Title>
        <S.Description>2K</S.Description>
      </S.Block>

      <S.Block>
        <S.Title>Rating</S.Title>
        <S.Description>18+</S.Description>
      </S.Block>

      <S.Block>
        <S.Title>Genre</S.Title>
        <S.Description>Action/Adventure</S.Description>
      </S.Block>
    </S.Content>
  </S.Wrapper>
)

export default GameDetails

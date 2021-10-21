import * as S from './styles'
import MediaMatch from 'components/MediaMatch'
import Heading from 'components/Heading'
import { Linux, Apple, Windows } from '@styled-icons/fa-brands'

type Platform = 'windows' | 'linux' | 'mac'

export type GameDetailsProps = {
  platforms: Platform[]
}

const GameDetails = ({ platforms }: GameDetailsProps) => {
  const platformIcons = {
    windows: <Windows title="Windows" aria-label="Windows" />,
    linux: <Linux title="Linux" aria-label="Linux" />,
    mac: <Apple title="Apple" aria-label="Apple" />
  }

  return (
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
          <S.WrapperIcons>
            {platforms.map((icon: Platform) => (
              <S.Icon key={icon}> {platformIcons[icon]} </S.Icon>
            ))}
          </S.WrapperIcons>
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
}
export default GameDetails

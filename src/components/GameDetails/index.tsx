import * as S from './styles'
import MediaMatch from 'components/MediaMatch'
import Heading from 'components/Heading'
import { Linux, Apple, Windows } from '@styled-icons/fa-brands'

type Platform = 'windows' | 'linux' | 'mac'
type Rating = 'FREE' | 'pegi3' | 'pegi7' | 'pegi12' | 'pegi16' | 'pegi18'

export type GameDetailsProps = {
  platforms: Platform[]
  releaseDate: string
  rating: Rating
  genre: string[]
}

const GameDetails = ({
  platforms,
  releaseDate,
  rating,
  genre
}: GameDetailsProps) => {
  const platformIcons = {
    windows: <Windows aria-label="Windows" />,
    linux: <Linux aria-label="Linux" />,
    mac: <Apple aria-label="Apple" />
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
          <S.Description>
            {new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }).format(new Date(releaseDate))}
          </S.Description>
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
          <S.Description>
            {rating !== 'FREE' ? `${rating.replace('pegi', '')}+` : rating}
          </S.Description>
        </S.Block>

        <S.Block>
          <S.Title>Genre</S.Title>
          <S.Description>{genre.join(' / ')}</S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  )
}
export default GameDetails

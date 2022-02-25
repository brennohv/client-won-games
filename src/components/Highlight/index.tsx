import Image from 'next/image'
import Button from 'components/Button'
import * as S from './styles'

export type HighlightProps = {
  title: string
  subtitle: string
  backgroundImage: string
  floatImage?: string
  buttonLabel: string
  buttonLink: string
  alignment?: 'right' | 'left'
}

const Highlight = ({
  title,
  subtitle,
  buttonLabel = 'Buy now',
  buttonLink,
  backgroundImage,
  floatImage,
  alignment = 'right'
}: HighlightProps) => (
  <S.Wrapper alignment={alignment} data-cy="highlight">
    <Image
      src={backgroundImage}
      alt={`${title} background`}
      layout="fill"
      objectFit="cover"
    />
    {!!floatImage && (
      <S.FloatImageWrapper>
        <Image src={floatImage} alt={title} height={200} width={200} />
      </S.FloatImageWrapper>
    )}
    <S.Content>
      <S.Title> {title} </S.Title>
      <S.Subtitle> {subtitle} </S.Subtitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Content>
  </S.Wrapper>
)

export default Highlight

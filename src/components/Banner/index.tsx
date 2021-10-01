import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import * as S from './styles'

export type BannerProps = {
  img?: string
  title?: string
  subtitle?: string
  buttonLabel?: string
  buttonLink?: string
  ribbon?: React.ReactNode
  ribbonSize?: RibbonSizes
  ribbonColor?: RibbonColors
}

const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  ribbon,
  ribbonSize = 'large',
  ribbonColor = 'primary'
}: BannerProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <S.Image src={img} role="img" aria-label={title}></S.Image>

    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.SubTitle dangerouslySetInnerHTML={{ __html: subtitle! }} />
      <MediaMatch lessThan="medium">
        <Button size="medium" as="a" href={buttonLink}>
          {buttonLabel}
        </Button>
      </MediaMatch>
      <MediaMatch greaterThan="medium">
        <Button size="large" as="a" href={buttonLink}>
          {buttonLabel}
        </Button>
      </MediaMatch>
    </S.Caption>
  </S.Wrapper>
)

export default Banner

import * as S from './styles'

export type RibbonColors = 'primary' | 'secondary'
export type RibbonSizes = 'extraLarge' | 'large' | 'small'

export type RibbonProps = {
  children: React.ReactNode
  color?: RibbonColors
  size?: RibbonSizes
}

const Ribbon = ({
  children,
  color = 'primary',
  size = 'large'
}: RibbonProps) => (
  <S.Wrapper color={color} size={size}>
    {children}
  </S.Wrapper>
)

export default Ribbon

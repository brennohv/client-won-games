import * as S from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'large' | 'medium' | 'small'
  fullWidht?: boolean
}

const Button = ({
  children,
  size = 'medium',
  fullWidht = false
}: ButtonProps) => (
  <S.Wrapper size={size} fullWidht={fullWidht}>
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button

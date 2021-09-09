import * as S from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'large' | 'medium' | 'small'
  fullWidht?: boolean
  icon?: JSX.Element
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({
  children,
  size = 'medium',
  fullWidht = false,
  icon,
  ...props
}: ButtonProps) => (
  <S.Wrapper size={size} fullWidht={fullWidht} hasIcon={!!icon} {...props}>
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button

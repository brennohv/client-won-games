import * as S from './styles'
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'large' | 'medium' | 'small'
  fullWidht?: boolean
  icon?: JSX.Element
  as?: React.ElementType
} & ButtonTypes

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

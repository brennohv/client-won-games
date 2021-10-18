import styled, { css } from 'styled-components'
import { lighten } from 'polished'

export const ForgetPassword = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.small};
    text-decoration: none;
    text-align: right;
    display: block;

    &:hover {
      color: ${lighten(0.2, theme.colors.black)};
    }
  `}
`

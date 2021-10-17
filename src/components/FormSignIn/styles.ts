import styled, { css } from 'styled-components'

export const ForgetPassword = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.small};
    text-decoration: none;
    text-align: right;
    display: block;
  `}
`

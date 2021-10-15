import styled, { css } from 'styled-components'

import * as TextFiledStyle from 'components/TextField/styles'
import * as ButtonStyles from 'components/Button/styles'

import { darken } from 'polished'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${TextFiledStyle.Wrapper} {
      margin: ${theme.spacings.xxsmall} 0;
    }

    ${ButtonStyles.Wrapper} {
      margin: 2.7rem auto ${theme.spacings.small};
    }
  `}
`

export const ForgetPassword = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.small};
    text-decoration: none;
    text-align: right;
    display: block;
  `}
`

export const FormLink = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.small};
    margin-top: ${theme.spacings.xsmall};

    a {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.secondary};
      text-decoration: none;
      border-bottom: 0.1rem solid ${theme.colors.secondary};
      transition: color, border, ${theme.transition.fast};

      &:hover {
        color: ${darken(0.1, theme.colors.secondary)};
        border-bottom: 0.1rem solid ${darken(0.1, theme.colors.secondary)};
      }
    }
  `}
`

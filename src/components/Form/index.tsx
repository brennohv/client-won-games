import styled, { css } from 'styled-components'

import * as TextFieldStyle from 'components/TextField/styles'
import * as ButtonStyles from 'components/Button/styles'

import { darken } from 'polished'

export const FormWrapper = styled.div`
  ${({ theme }) => css`
    ${TextFieldStyle.Wrapper} {
      margin: ${theme.spacings.xxsmall} 0;
    }

    ${ButtonStyles.Wrapper} {
      margin: ${theme.spacings.medium} auto ${theme.spacings.small};
    }
  `}
`
export const FormSucess = styled.div`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.medium};

    & svg {
      width: 2.4rem;
      color: ${theme.colors.secondary};
      margin-right: 0.4rem;
    }
  `}
`

export const Error = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: initial;
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};

    & svg {
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`
export const FormLink = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    text-align: center;

    a {
      text-decoration: none;
      color: ${theme.colors.secondary};
      border-bottom: 0.1rem solid ${theme.colors.secondary};

      &:hover {
        color: ${darken(0.1, theme.colors.secondary)};
        border-bottom: 0.1rem solid ${darken(0.1, theme.colors.secondary)};
      }
    `}
`

export const FormLoading = styled.img.attrs(() => ({
  src: '/img/dots.svg',
  alt: 'Waiting...'
}))`
  width: 4rem;
`

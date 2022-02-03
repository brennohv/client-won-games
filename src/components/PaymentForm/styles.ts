import styled, { css } from 'styled-components'
import { Error } from 'components/Form'

export const Wrapper = styled.main``

export const Body = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    background-color: ${theme.colors.white};

    ${Error} {
      padding-top: ${theme.spacings.xsmall};
    }
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightGray};
    padding: ${theme.spacings.xsmall};
    display: flex;
    align-items: center;
    font-weight: ${theme.font.bold};
  `}
`

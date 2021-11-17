import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-self: start;
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f3f3f3;
    padding: ${theme.spacings.xsmall};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.medium};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xlarge};
      padding: ${theme.spacings.small};
    `}
  `}
`

export const Total = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`

import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import * as EmptyStyles from 'components/Empty/styles'

type WrapperProps = {
  isEmpty: boolean
}

export const Wrapper = styled.main<WrapperProps>`
  ${({ theme, isEmpty }) => css`
    background: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-self: start;

    ${isEmpty &&
    css`
      ${EmptyStyles.Wrapper} {
        padding-bottom: ${theme.spacings.medium};
      }
      ${EmptyStyles.Image} {
        max-width: 20rem;
      }
      ${EmptyStyles.Ttile} {
        font-size: ${theme.font.sizes.large};
      }
      ${EmptyStyles.Description} {
        color: ${theme.colors.black};
        font-size: ${theme.font.sizes.medium};
      }
    `}
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
export const GameList = styled.div`
  max-height: 40rem;
  overflow-y: auto;
`

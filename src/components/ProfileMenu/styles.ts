import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.white};
    border-bottom: 0.1rem solid ${theme.colors.lightGray};

    ${media.greaterThan('medium')`
      flex-direction: column;
      border: 0;

      a:not(:last-child) {
        border-bottom: 0.1rem solid ${theme.colors.lightGray};
      }
    `}
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.black};
    display: flex;
    align-items: center;
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};

    span {
      margin-left: ${theme.spacings.xxsmall};
    }

    &:hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
    }

    &:focus {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
    }

    ${media.lessThan('medium')`
      justify-content: center;
      flex: 1;

      > span {
        display: none;
      }
    `}
  `}
`

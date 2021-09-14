import media from 'styled-media-query'
import styled, { css, DefaultTheme } from 'styled-components'
import { HeadingProps } from '.'

const modifierWrapper = {
  lineLeft: (theme: DefaultTheme) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors.secondary};
  `,
  lineBottom: (theme: DefaultTheme) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      position: absolute;
      /* left: 0;
      bottom: -1rem; */
      display: block;
      content: '';
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors.primary};
    }
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, lineLeft, lineBottom }) => css`
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge}
    `}
    color: ${theme.colors[color!]};

    ${lineLeft && modifierWrapper.lineLeft(theme)}
    ${lineBottom && modifierWrapper.lineBottom(theme)}
  `}
`

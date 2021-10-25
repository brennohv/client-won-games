import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type CoverProps = {
  src: string
}

export const Cover = styled.div<CoverProps>`
  ${({ src }) => css`
    height: 39.5rem;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    background-image: url(${src});
    background-size: cover;
    background-position: top center;
    opacity: 0.4;

    ${media.greaterThan('medium')`
      height: 70.9rem;
      clip-path: polygon(100% 0%, 100% 100%, 0% 85%, 0% 0%);

    `}
  `}
`

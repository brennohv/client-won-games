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
export const Container = styled.main`
  ${({ theme }) => css`
    margin-left: auto;
    margin-right: auto;
    padding-right: calc(${theme.grid.gutter} / 2);
    padding-left: calc(${theme.grid.gutter} / 2);

    ${media.greaterThan('medium')`
      padding-right: calc(${theme.spacings.large} * 2);
      padding-left: calc(${theme.spacings.large} * 2);
    `}
  `}
`

export const SectionGameInfo = styled.div`
  margin-top: 19rem;

  ${media.greaterThan('medium')`
      margin-top: 26rem;
  `}
`
export const SectionGallery = styled.div`
  display: none;
  margin-top: 10.2rem;

  ${media.greaterThan('medium')`
    display: block;
  `}
`
export const SectionTextContent = styled.div`
  ${({ theme }) => css`
    margin-top: 4.1rem;

    ${media.greaterThan('medium')`
    margin-top: 8.6rem;
  `}

    .description__copyrights {
      font-size: ${theme.font.sizes.xsmall};
      color: ${theme.colors.gray};
      margin-top: ${theme.spacings.xsmall};
    }
  `}
`

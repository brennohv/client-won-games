import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { Container } from 'components/Container'

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
      clip-path: polygon(100% 0%,100% 100%,0% 85%,0% 0%);

    `}
  `}
`
export const Section = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xlarge};
    ${media.greaterThan('medium')`
      margin-bottom: calc(${theme.spacings.xlarge} * 2);
    `}
  `}
`

export const SectionGameInfo = styled(Section)`
  margin-top: 19rem;

  ${media.greaterThan('medium')`
      margin-top: 45rem;
  `}
`
export const SectionGallery = styled(Section)`
  display: none;
  margin-top: 10.2rem;

  ${media.greaterThan('medium')`
    display: block;
  `}
`
export const SectionTextContent = styled(Section)`
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
export const SectionGameDetails = styled(Section)`
  margin-top: 5.3rem;
  border-bottom: 0.1rem solid rgba(181, 181, 181, 0.3);
  padding-bottom: 4rem;

  ${media.greaterThan('medium')`
    margin-top: 9rem;
    margin-bottom: 9.1rem;
  `}
`

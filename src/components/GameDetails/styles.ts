import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.small} 0;
  `}
`

export const Block = styled.div``

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
    grid-template-columns: repeat(3, 1fr);
    `}

    ${media.greaterThan('large')`
    grid-template-columns: repeat(6, 1fr);
    `}
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};

    ${media.greaterThan('small')`
      margin-top: ${theme.spacings.large};
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    font-weight: 500;

    ${media.greaterThan('small')`
      font-size: ${theme.font.sizes.xlarge};
    `}
  `}
`

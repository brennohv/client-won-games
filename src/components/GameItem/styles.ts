import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.small}};
    border-bottom: 0.1rem solid ${theme.colors.lightGray};

    ${media.greaterThan('medium')`
      display: flex;
    `}
  `}
`

export const SectionGame = styled.div`
  display: flex;
`

export const ImageBox = styled.div`
  ${({ theme }) => css`
    flex-shrink: 0;
    margin-right: 1.2rem;
    max-width: 9.4rem;
    max-height: 5.6rem;

    ${media.greaterThan('medium')`
    margin-right: ${theme.spacings.small};
    max-width: 15.1rem;
    max-height: 7rem;
  `}
  `}
`

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.small};
    line-height: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.xxsmall};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.medium};
      line-height: ${theme.font.sizes.medium};
    `}
  `}
`

export const Price = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    padding: 0 1.5rem;
    background-color: ${theme.colors.secondary};
    border-radius: ${theme.border.radius};
  `}
`

export const DownloadLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    margin-left: ${theme.spacings.xxsmall};
  `}
`

export const SectionPayment = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};
    margin-top: ${theme.spacings.xsmall};
    display: flex;
    flex-direction: column;
    min-width: 28rem;

    ${media.greaterThan('medium')`
      margin-top: 0;
      flex: 1;
      flex-direction: column-reverse;
      justify-content: space-between;
      align-items: flex-end;
    `}
  `}
`

export const CardInfo = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};
    display: flex;
    align-items: center;
    margin-top: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
      margin-top: 0;
    `}
  `}
`

export const PurchaseDate = styled.p``

export const CardImage = styled.img`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xxsmall};
  `}
`

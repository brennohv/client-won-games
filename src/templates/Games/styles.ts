import { Container } from './../../components/Container/index'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import * as BaseStyle from 'templates/Base/styles'

type WrapperProps = {
  whenFilterIsOpen: boolean
}

const wrapperModifier = {
  open: () => css`
    ${media.lessThan('medium')`
      overflow-y: hidden;
    `}
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ whenFilterIsOpen }) => css`
    ${media.lessThan('medium')`
      ${BaseStyle.Wrapper} {
        ${whenFilterIsOpen && wrapperModifier.open()}
      }
    `}
  `}
`

export const Main = styled(Container)`
  ${({ theme }) => css`
    display: grid;

    ${media.greaterThan('medium')`
      grid-template-columns: 26rem 3fr;
      gap: ${theme.spacings.xxlarge};
      padding-top: ${theme.spacings.medium}

    `}
  `}
`

export const WrapperExplore = styled.div`
  ${media.lessThan('medium')`
    display: flex;
    justify-content: end;
  `}
`

export const ShowMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10rem;
`

export const ShorMoreButton = styled.div`
  ${({ theme }) => css`
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    color: ${theme.colors.white};
    cursor: pointer;
    padding: ${theme.spacings.medium};

    & svg {
      color: ${theme.colors.primary};
    }
  `}
`

export const ShowMoreLoading = styled.img`
  width: 4rem;
`

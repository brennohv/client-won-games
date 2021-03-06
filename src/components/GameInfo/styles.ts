import styled, { css } from 'styled-components'
import * as ButtonStyles from 'components/Button/styles'
import * as RibbonStyles from 'components/Ribbon/styles'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.small} ${theme.spacings.small}
      calc(${theme.spacings.xsmall} / 2);

    ${RibbonStyles.Wrapper} {
      padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
      font-size: ${theme.font.sizes.xlarge};
    }

    ${ButtonStyles.Wrapper} {
      font-weight: 500;
    }

    ${media.lessThan('medium')`
      ${ButtonStyles.Wrapper} {
        width: 100%
      }
    `}
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};
    margin-bottom: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      max-width: 77rem
    `}
  `}
`

export const WrapperButton = styled.div`
  ${({ theme }) => css`
    ${ButtonStyles.Wrapper} {
      margin-bottom: ${theme.spacings.xsmall};
    }
    ${media.greaterThan('medium')`
      align-self: flex-end;
      display: flex;
      flex-direction: row-reverse;
    `}
  `}
`
export const WrapperHeading = styled.div`
  width: calc(100% - 7.5rem);
`

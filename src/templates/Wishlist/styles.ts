import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-top: calc(${theme.spacings.large} * 2);
    padding-bottom: calc(${theme.spacings.large} * 2);
    border-bottom: 0.1rem solid rgba(181, 181, 181, 0.3);
    margin-bottom: calc(${theme.spacings.medium} * 2);
  `}
`

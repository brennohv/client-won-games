import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-top: calc(${theme.spacings.large} * 2);
    margin-bottom: calc(${theme.spacings.medium} * 2);
  `}
`

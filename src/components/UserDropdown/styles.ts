import styled, { css } from 'styled-components'

export const WrapperPopUp = styled.nav`
  display: flex;
  flex-direction: column;
  width: 22.4rem;

  & > a:not(:last-of-type) {
    border-bottom: 0.5px solid rgba(218, 218, 218, 0.3);
  }
`

export const Link = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.black};
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.small};
    display: flex;
    align-items: center;
    transition: background-color ${theme.transition.fast};

    & > span {
      margin-left: ${theme.spacings.xxsmall};
    }

    &:hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
    }
  `}
`

export const UserName = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.xxsmall};
  `}
`

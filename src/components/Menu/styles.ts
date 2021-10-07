import media from 'styled-media-query'
import styled, { css } from 'styled-components'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    position: relative;
    padding: ${theme.spacings.small} 0;
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
    width: 2.3rem;
    height: 2.3rem;
  `}
`
export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `}
`

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;

    > div {
      margin-left ${theme.spacings.xsmall};
    }
  `}
`

export const MenuNav = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      margin-left: ${theme.spacings.small}
    `}
  `}
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    position: relative;
    font-size: ${theme.font.sizes.medium};
    margin: 0.3rem ${theme.spacings.small} 0;
    text-align: center;
    text-decoration: none;

    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.primary};
        animation: hoverAnimation 0.3s forwards;
      }

      @keyframes hoverAnimation {
        from {
          width: 0%;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0%;
        }
      }
    }
  `}
`

type MenuFullProps = {
  isOpen: boolean
}

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ isOpen, theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${theme.colors.white};
    position: fixed;
    z-index: ${theme.layers.menu};
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    height: 100vh;
    overflow: hidden;
    pointer-events: ${isOpen ? 'all' : 'none'};
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      cursor: pointer;
      width: 2.3rem;
      height: 2.3rem;
    }

    ${MenuLink} {
      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.xxlarge};
      font-weight: ${theme.font.bold};
      margin-bottom: ${theme.spacings.medium};
      transform: ${isOpen ? 'translateY(0rem)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }

    ${RegisterBox} {
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }

    ${MenuNav} {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex: 1;
    }
  `}
`
export const RegisterBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};

    > span {
      display: block;
      margin: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`

export const CreatAccount = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.primary};
    border-bottom: 0.2rem solid ${theme.colors.primary};
  `}
`

import Link from 'next/link'

import { useState } from 'react'
import * as S from './styles'
import Logo from 'components/Logo'

import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'
import CartDropdown from 'components/CartDropdown'
import CartIcon from 'components/CartIcon'
import UserDropdown from 'components/UserDropdown'

export type MenuProps = {
  userName?: string
}

const Menu = ({ userName }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link href="/">
          <a>
            <Logo hideOnMobile />
          </a>
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>Home</S.MenuLink>
          </Link>
          <Link href="/games" passHref>
            <S.MenuLink>Store</S.MenuLink>
          </Link>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Search" />
        </S.IconWrapper>

        <MediaMatch greaterThan="medium">
          <CartDropdown />
        </MediaMatch>

        <MediaMatch lessThan="medium">
          <Link href="/cart">
            <a>
              <CartIcon />
            </a>
          </Link>
        </MediaMatch>

        <MediaMatch greaterThan="medium">
          {!userName ? (
            <Link href="/sign-in" passHref>
              <Button as="a" size="medium">
                Sign in
              </Button>
            </Link>
          ) : (
            <UserDropdown userName={userName} />
          )}
        </MediaMatch>
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>Home</S.MenuLink>
          </Link>

          <Link href="/games" passHref>
            <S.MenuLink>Store</S.MenuLink>
          </Link>

          {!!userName && (
            <>
              <Link href="/profile/me" passHref>
                <S.MenuLink>My account</S.MenuLink>
              </Link>
              <Link href="/wishlist" passHref>
                <S.MenuLink>Wishlist</S.MenuLink>
              </Link>
            </>
          )}
        </S.MenuNav>

        {!userName && (
          <S.RegisterBox>
            <Link href="/sign-in" passHref>
              <Button as="a" size="large" fullWidht>
                Sign in
              </Button>
            </Link>
            <span>or</span>
            <Link href="/sign-up" passHref>
              <S.CreatAccount title="Sign Up">Sign Up</S.CreatAccount>
            </Link>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}
export default Menu

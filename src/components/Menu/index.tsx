import Link from 'next/link'

import { useState } from 'react'
import * as S from './styles'
import Logo from 'components/Logo'

import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { ShoppingCart as ShoppinCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'

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
        <Logo hideOnMobile />
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Store</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Search" />
        </S.IconWrapper>
        <S.IconWrapper>
          <ShoppinCartIcon aria-label="Shopping Cart" />
        </S.IconWrapper>
        {!userName && (
          <MediaMatch greaterThan="medium">
            <Link href="/sign-in" passHref>
              <Button as="a" size="medium">
                Sign in
              </Button>
            </Link>
          </MediaMatch>
        )}
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Store</S.MenuLink>
          {!!userName && (
            <>
              <S.MenuLink href="#">My account</S.MenuLink>
              <S.MenuLink href="#">Wishlist</S.MenuLink>
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

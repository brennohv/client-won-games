import {
  AccountCircle,
  KeyboardArrowDown,
  FavoriteBorder,
  ExitToApp
} from '@styled-icons/material-outlined'
import Link from 'next/link'

import Dropdown from 'components/Dropdown'

import * as S from './styles'

export type UserDropdownProps = {
  userName?: string
}

const UserDropdown = ({ userName }: UserDropdownProps) => (
  <Dropdown
    title={
      <>
        <AccountCircle size={24} />
        <S.UserName>{userName}</S.UserName>
        <KeyboardArrowDown size={24} />
      </>
    }
  >
    <S.WrapperPopUp>
      <Link href="/profile/me" passHref>
        <S.Link>
          <AccountCircle size={24} />
          <span>My profile</span>
        </S.Link>
      </Link>
      <Link href="/wishlist" passHref>
        <S.Link>
          <FavoriteBorder size={24} />
          <span>Wishlist</span>
        </S.Link>
      </Link>
      <Link href="/sign-in" passHref>
        <S.Link>
          <ExitToApp size={24} />
          <span>Sign out</span>
        </S.Link>
      </Link>
    </S.WrapperPopUp>
  </Dropdown>
)

export default UserDropdown
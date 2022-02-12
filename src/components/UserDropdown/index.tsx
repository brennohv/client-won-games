import { useRouter } from 'next/router'
import Link from 'next/link'

import {
  AccountCircle,
  KeyboardArrowDown,
  FavoriteBorder,
  ExitToApp
} from '@styled-icons/material-outlined'

import Dropdown from 'components/Dropdown'

import * as S from './styles'
import { signOut } from 'next-auth/client'

export type UserDropdownProps = {
  userName?: string
}

const UserDropdown = ({ userName }: UserDropdownProps) => {
  const { push } = useRouter()

  return (
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

        <S.Link
          role={'button'}
          title="Sign out"
          onClick={async () => {
            const data = await signOut({ redirect: false, callbackUrl: '/' })
            push(data.url)
          }}
        >
          <ExitToApp size={24} />
          <span>Sign out</span>
        </S.Link>
      </S.WrapperPopUp>
    </Dropdown>
  )
}

export default UserDropdown

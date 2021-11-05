import * as S from './styles'
import Link from 'next/link'
import {
  AccountCircle,
  CreditCard,
  ExitToApp,
  FormatListBulleted
} from '@styled-icons/material-outlined'

const ProfileMenu = () => (
  <S.Nav>
    <Link href="/profile/me" passHref>
      <S.Link>
        <AccountCircle size={24} aria-label="My profile" />
        <span>My profile</span>
      </S.Link>
    </Link>
    <Link href="/profile/cards" passHref>
      <S.Link>
        <CreditCard size={24} aria-label="My cards" />
        <span>My cards</span>
      </S.Link>
    </Link>
    <Link href="/profile/orders" passHref>
      <S.Link>
        <FormatListBulleted size={24} aria-label="My orders" />
        <span>My orders</span>
      </S.Link>
    </Link>
    <Link href="/profile/logout" passHref>
      <S.Link>
        <ExitToApp size={24} aria-label="Sign out" />
        <span>Sign out</span>
      </S.Link>
    </Link>
  </S.Nav>
)

export default ProfileMenu

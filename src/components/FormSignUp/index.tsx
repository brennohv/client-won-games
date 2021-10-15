import { AccountCircle } from '@styled-icons/material-outlined/AccountCircle'
import { Email, Lock } from '@styled-icons/material-outlined'

import Link from 'next/link'

import * as S from './styles'
import Button from 'components/Button'
import TextField from 'components/TextField'

const FormSignUp = () => (
  <S.Wrapper>
    <form>
      <TextField
        type="text"
        name="name"
        placeholder="Name"
        icon={<AccountCircle />}
      />
      <TextField
        type="email"
        name="email"
        placeholder="Email"
        icon={<Email />}
      />
      <TextField
        type="password"
        name="password"
        placeholder="Password"
        icon={<Lock />}
      />
      <TextField
        type="password"
        name="password"
        placeholder="Confirm password"
        icon={<AccountCircle />}
      />

      <Button fullWidht size="large">
        Sign up now
      </Button>

      <S.FormLink>
        Already have an account?
        <Link href="/sign-in">
          <a> Sign in</a>
        </Link>
      </S.FormLink>
    </form>
  </S.Wrapper>
)

export default FormSignUp

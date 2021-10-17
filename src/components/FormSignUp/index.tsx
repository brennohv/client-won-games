import Link from 'next/link'

import { AccountCircle } from '@styled-icons/material-outlined/AccountCircle'
import { Email, Lock } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import TextField from 'components/TextField'

import { FormWrapper, FormLink } from 'components/Form'

const FormSignUp = () => (
  <FormWrapper>
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

      <FormLink>
        Already have an account?
        <Link href="/sign-in">
          <a> Sign in</a>
        </Link>
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignUp

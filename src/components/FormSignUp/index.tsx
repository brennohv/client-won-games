import Link from 'next/link'

import { AccountCircle } from '@styled-icons/material-outlined/AccountCircle'
import { Email, Lock } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import TextField from 'components/TextField'

import { FormWrapper, FormLink, FormLoading } from 'components/Form'
import React, { useState } from 'react'
import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'
import { useMutation } from '@apollo/client'
import { MUTATION_REGISTER } from 'graphql/mutations/register'
import { signIn } from 'next-auth/client'

const FormSignUp = () => {
  const [values, setValues] = useState<UsersPermissionsRegisterInput>({
    email: '',
    password: '',
    username: ''
  })

  const [createUser, { error, loading }] = useMutation(MUTATION_REGISTER, {
    onError: (err) => console.error(err),
    onCompleted: () => {
      !error &&
        signIn('credentials', {
          email: values.email,
          password: values.password,
          callbackUrl: '/'
        })
    }
  })

  const handleMutation = (field: string, value: string) => {
    setValues((v) => ({ ...v, [field]: value }))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    createUser({
      variables: {
        input: {
          email: values.email,
          password: values.password,
          username: values.username
        }
      }
    })
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          name="username"
          placeholder="Username"
          onInputChange={(v) => handleMutation('username', v)}
          icon={<AccountCircle />}
        />
        <TextField
          type="email"
          name="email"
          placeholder="Email"
          onInputChange={(v) => handleMutation('email', v)}
          icon={<Email />}
        />
        <TextField
          type="password"
          name="password"
          placeholder="Password"
          onInputChange={(v) => handleMutation('password', v)}
          icon={<Lock />}
        />
        <TextField
          type="password"
          name="confirm-password"
          placeholder="Confirm password"
          onInputChange={(v) => handleMutation('confirm-password', v)}
          icon={<AccountCircle />}
        />

        <Button fullWidht size="large" type="submit" disabled={loading}>
          {loading ? <FormLoading /> : <span>Sign up now</span>}
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
}

export default FormSignUp

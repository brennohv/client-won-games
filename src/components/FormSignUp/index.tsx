import Link from 'next/link'

import { AccountCircle } from '@styled-icons/material-outlined/AccountCircle'
import { Email, ErrorOutline, Lock } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import TextField from 'components/TextField'

import { FormWrapper, FormLink, FormLoading, Error } from 'components/Form'
import React, { useState } from 'react'
import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'
import { useMutation } from '@apollo/client'
import { MUTATION_REGISTER } from 'graphql/mutations/register'
import { signIn } from 'next-auth/client'
import { FieldErrors, signUpValidation } from 'utils/validations'

const FormSignUp = () => {
  const [values, setValues] = useState<UsersPermissionsRegisterInput>({
    email: '',
    password: '',
    username: ''
  })
  const [formError, setFormError] = useState('')
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})

  const [createUser, { error, loading }] = useMutation(MUTATION_REGISTER, {
    onError: (err) =>
      setFormError(
        err?.graphQLErrors[0]?.extensions?.exception.data.message[0].messages[0]
          .message
      ),
    onCompleted: () => {
      !error &&
        signIn('credentials', {
          email: values.email,
          password: values.password,
          callbackUrl: '/'
        })
    }
  })

  const handleInput = (field: string, value: string) => {
    setValues((v) => ({ ...v, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setFormError('')

    const errors = signUpValidation(values)

    if (Object.keys(errors).length) {
      setFieldErrors(errors)
      return
    }

    setFieldErrors({})

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
      {!!formError && (
        <Error>
          <ErrorOutline size={15} />
          {formError}
        </Error>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          error={fieldErrors?.username}
          type="text"
          name="username"
          placeholder="Username"
          onInputChange={(v) => handleInput('username', v)}
          icon={<AccountCircle />}
        />
        <TextField
          error={fieldErrors?.email}
          type="email"
          name="email"
          placeholder="Email"
          onInputChange={(v) => handleInput('email', v)}
          icon={<Email />}
        />
        <TextField
          error={fieldErrors?.password}
          type="password"
          name="password"
          placeholder="Password"
          onInputChange={(v) => handleInput('password', v)}
          icon={<Lock />}
        />
        <TextField
          error={fieldErrors?.confirm_password}
          type="password"
          name="confirm_password"
          placeholder="Confirm password"
          onInputChange={(v) => handleInput('confirm_password', v)}
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

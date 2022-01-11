import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Link from 'next/link'

import { Email, Lock, ErrorOutline } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import TextField from 'components/TextField'
import * as S from './styles'

import { FormWrapper, FormLink, FormLoading, Error } from 'components/Form'
import { signIn } from 'next-auth/client'
import { FieldErrors, signInValidation } from 'utils/validations'

const FormSignIn = () => {
  const [formError, setFormError] = useState('')
  const [fieldError, setfieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)

  const { push } = useRouter()

  const handleInput = (field: string, value: string) => {
    setValues((v) => ({ ...v, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = signInValidation(values)

    if (Object.keys(errors).length) {
      setfieldError(errors)
      setLoading(false)
      setFormError('')
      return
    }

    setfieldError({})

    /* sign in
     * @docs https://next-auth.js.org/getting-started/client#signin
     */
    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: '/'
    })

    if (result?.url) {
      return push(result.url)
    }

    setLoading(false)

    //jogar o erro
    setFormError('Usuario ou senha invalidos')
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
          error={fieldError?.email}
          onInputChange={(v) => handleInput('email', v)}
          name="email"
          placeholder="Email"
          type="email"
          icon={<Email />}
        />
        <TextField
          error={fieldError?.password}
          onInputChange={(v) => handleInput('password', v)}
          name="password"
          placeholder="Password"
          type="password"
          icon={<Lock />}
        />
        <S.ForgetPassword href="#">Forget your password? </S.ForgetPassword>

        <Button size="large" fullWidht type="submit" disabled={loading}>
          {loading ? <FormLoading /> : <span>Sing in now</span>}
        </Button>

        <FormLink>
          Don’t have an account?
          <Link href="/sign-up">
            <a> Sign up</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignIn

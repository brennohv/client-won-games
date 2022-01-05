import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Link from 'next/link'

import { Email, Lock } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import TextField from 'components/TextField'
import * as S from './styles'

import { FormWrapper, FormLink } from 'components/Form'
import { signIn } from 'next-auth/client'

const FormSignIn = () => {
  const [values, setValues] = useState({})

  const { push } = useRouter()

  const handleInput = (field: string, value: string) => {
    setValues((v) => ({ ...v, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

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

    //jogar o erro
    console.error('usuario ou senha errado')
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          onInputChange={(v) => handleInput('email', v)}
          name="email"
          placeholder="Email"
          type="email"
          icon={<Email />}
        />
        <TextField
          onInputChange={(v) => handleInput('password', v)}
          name="password"
          placeholder="Password"
          type="password"
          icon={<Lock />}
        />
        <S.ForgetPassword href="#">Forget your password? </S.ForgetPassword>

        <Button size="large" fullWidht type="submit">
          Sing in now
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

import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Link from 'next/link'

import { Email, Lock } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import TextField from 'components/TextField'
import * as S from './styles'

import { FormWrapper, FormLink, FormLoading } from 'components/Form'
import { signIn } from 'next-auth/client'

const FormSignIn = () => {
  const [values, setValues] = useState({})
  const [loading, setLoading] = useState(false)

  const { push } = useRouter()

  const handleInput = (field: string, value: string) => {
    setValues((v) => ({ ...v, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

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

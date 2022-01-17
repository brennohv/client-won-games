import { useRouter } from 'next/router'
import React, { useState } from 'react'

import {
  Lock,
  ErrorOutline,
  AccountCircle
} from '@styled-icons/material-outlined'

import Button from 'components/Button'
import TextField from 'components/TextField'

import { FormWrapper, FormLoading, Error } from 'components/Form'

import { FieldErrors, resetValidation } from 'utils/validations'
import { signIn } from 'next-auth/client'

const FormResetPassword = () => {
  const [formError, setFormError] = useState('')
  const [fieldError, setfieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState({ password: '', confirm_password: '' })
  const [loading, setLoading] = useState(false)

  const { push, query } = useRouter()

  const handleInput = (field: string, value: string) => {
    setValues((v) => ({ ...v, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = resetValidation(values)

    if (Object.keys(errors).length) {
      setfieldError(errors)
      setLoading(false)
      setFormError('')
      return
    }

    setfieldError({})

    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: `${window.location.origin}${query?.callbackUrl || ''}`
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
          error={fieldError?.password}
          type="password"
          name="password"
          placeholder="Password"
          onInputChange={(v) => handleInput('password', v)}
          icon={<Lock />}
        />
        <TextField
          error={fieldError?.confirm_password}
          type="password"
          name="confirm_password"
          placeholder="Confirm password"
          onInputChange={(v) => handleInput('confirm_password', v)}
          icon={<AccountCircle />}
        />

        <Button size="large" fullWidht type="submit" disabled={loading}>
          {loading ? <FormLoading /> : <span>Reset Password</span>}
        </Button>
      </form>
    </FormWrapper>
  )
}

export default FormResetPassword

import { useRouter } from 'next/router'
import React, { useState } from 'react'

import { Email, ErrorOutline } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import TextField from 'components/TextField'

import { FormWrapper, FormLoading, Error } from 'components/Form'

import { FieldErrors } from 'utils/validations'
import { signin } from 'next-auth/client'

const FormForgotPassword = () => {
  const [formError, setFormError] = useState('')
  const [fieldError, setfieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState({ email: '' })
  const [loading, setLoading] = useState(false)

  const { push, query } = useRouter()

  const handleInput = (field: string, value: string) => {
    setValues((v) => ({ ...v, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = {}

    if (Object.keys(errors).length) {
      setfieldError(errors)
      setLoading(false)
      setFormError('')
      return
    }

    setfieldError({})

    const result = await signin('credentials', {
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
          error={fieldError?.email}
          onInputChange={(v) => handleInput('email', v)}
          name="email"
          placeholder="Email"
          type="email"
          icon={<Email />}
        />

        <Button size="large" fullWidht type="submit" disabled={loading}>
          {loading ? <FormLoading /> : <span>Send email</span>}
        </Button>
      </form>
    </FormWrapper>
  )
}

export default FormForgotPassword

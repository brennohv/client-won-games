import React, { useState } from 'react'

import { Email, ErrorOutline } from '@styled-icons/material-outlined'
import { CheckCircle } from '@styled-icons/material-outlined/CheckCircle'

import Button from 'components/Button'
import TextField from 'components/TextField'

import { FormWrapper, FormLoading, Error, FormSucess } from 'components/Form'

import { FieldErrors, forgotValidation } from 'utils/validations'
import { useRouter } from 'next/router'

const FormForgotPassword = () => {
  const { query } = useRouter()
  const [sucess, setSucess] = useState(false)
  const [formError, setFormError] = useState('')
  const [fieldError, setfieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState({ email: (query.email as string) || '' })
  const [loading, setLoading] = useState(false)

  const handleInput = (field: string, value: string) => {
    setValues((v) => ({ ...v, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = forgotValidation(values)

    if (Object.keys(errors).length) {
      setfieldError(errors)
      setLoading(false)
      return
    }

    setfieldError({})

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      }
    )

    const data = await response.json()
    setLoading(false)
    if (data.error) {
      setFormError(data.message[0].messages[0].message)
      console.log('error', data)
    } else {
      setSucess(true)
    }
  }

  return (
    <FormWrapper>
      {sucess ? (
        <FormSucess>
          <CheckCircle />O email para recuperar sua senha foi enviado
        </FormSucess>
      ) : (
        <>
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
              initialValue={query.email as string}
              name="email"
              placeholder="Email"
              type="text"
              icon={<Email />}
            />

            <Button size="large" fullWidht type="submit" disabled={loading}>
              {loading ? <FormLoading /> : <span>Send email</span>}
            </Button>
          </form>
        </>
      )}
    </FormWrapper>
  )
}

export default FormForgotPassword

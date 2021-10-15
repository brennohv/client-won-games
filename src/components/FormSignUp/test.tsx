import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormSignUp from '.'

describe('<FormSignUp />', () => {
  it('should render the form', () => {
    renderWithTheme(<FormSignUp />)

    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Confirm password')).toBeInTheDocument()
  })

  it('should render the Button', () => {
    renderWithTheme(<FormSignUp />)

    expect(
      screen.getByRole('button', { name: 'Sign up now' })
    ).toBeInTheDocument()
  })

  it('should render the text and link to Sign in', () => {
    renderWithTheme(<FormSignUp />)

    expect(screen.getByText(/Already have an account?/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Sign in' })).toBeInTheDocument()
  })
})

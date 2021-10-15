import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormSignIn from '.'

describe('<FormSignIn />', () => {
  it('should render the heading', () => {
    renderWithTheme(<FormSignIn />)
    // verfique o email
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    //verique o password
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    //verifique o button
    expect(
      screen.getByRole('button', { name: /Sing in now/i })
    ).toBeInTheDocument()
  })

  it('should render the forget password link', () => {
    renderWithTheme(<FormSignIn />)

    expect(
      screen.getByRole('link', { name: /Forget your password?/i })
    ).toBeInTheDocument()
  })

  it('should render the text and link to sign up', () => {
    renderWithTheme(<FormSignIn />)

    expect(screen.getByText(/Don’t have an account?/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Sign up/i })).toBeInTheDocument()
  })
})

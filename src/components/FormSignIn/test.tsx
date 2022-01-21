import { render, screen } from 'utils/test-utils'

import FormSignIn from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}))

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    const { container } = render(<FormSignIn />)
    // verfique o email
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    //verique o password
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    //verifique o button
    expect(
      screen.getByRole('button', { name: /Sing in now/i })
    ).toBeInTheDocument()

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should render the forget password link', () => {
    render(<FormSignIn />)

    expect(
      screen.getByRole('link', { name: /Forget your password?/i })
    ).toBeInTheDocument()
  })

  it('should render the text and link to sign up', () => {
    render(<FormSignIn />)

    expect(screen.getByText(/Don’t have an account?/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Sign up/i })).toBeInTheDocument()
  })
})

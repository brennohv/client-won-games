import 'server.mock'
import userEvent from '@testing-library/user-event'
import { render, screen } from 'utils/test-utils'
import FormForgotPassword from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
let query = {}
useRouter.mockImplementation(() => ({
  query
}))
describe('FormForgotPassword', () => {
  it('should render components', () => {
    render(<FormForgotPassword />)

    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Send email' })
    ).toBeInTheDocument()
  })

  it('should show an invalid email', async () => {
    render(<FormForgotPassword />)

    userEvent.type(screen.getByPlaceholderText('Email'), 'invalid')
    userEvent.click(screen.getByRole('button', { name: 'Send email' }))

    expect(
      await screen.findByText('"email" must be a valid email')
    ).toBeInTheDocument()
  })

  it('should show an inexistent email error', async () => {
    render(<FormForgotPassword />)

    userEvent.type(screen.getByPlaceholderText('Email'), 'false@email.com')
    userEvent.click(screen.getByRole('button', { name: 'Send email' }))

    expect(
      await screen.findByText('This email does not exist')
    ).toBeInTheDocument()
  })

  it('should validate email', async () => {
    render(<FormForgotPassword />)

    userEvent.type(
      //Aonde quero escrever
      screen.getByPlaceholderText(/email/i),
      'brennovicentini@gmail.com' // O que eu quero escrever
    )
    userEvent.click(screen.getByRole('button', { name: 'Send email' }))

    expect(
      await screen.findByText('O email para recuperar sua senha foi enviado')
    ).toBeInTheDocument()
  })

  it('should autofill when passed via query', () => {
    query = {
      email: 'brennovicentini@gmail.com'
    }
    render(<FormForgotPassword />)

    expect(screen.getByPlaceholderText('Email')).toHaveValue(
      'brennovicentini@gmail.com'
    )
  })
})

import 'server.mock'
import { signIn } from 'next-auth/client'
import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from 'utils/test-utils'
import FormResetPassword from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
let query = {}
useRouter.mockImplementation(() => ({
  query
}))

jest.mock('next-auth/client', () => ({
  signIn: jest.fn()
}))

describe('FormResetPassword', () => {
  it('should render components', () => {
    render(<FormResetPassword />)

    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Confirm password/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Reset Password' }))
  })

  it('should invalid password', async () => {
    render(<FormResetPassword />)

    userEvent.type(screen.getByPlaceholderText('Password'), '12345')
    userEvent.type(screen.getByPlaceholderText(/Confirm password/i), '123')

    userEvent.click(screen.getByRole('button', { name: 'Reset Password' }))

    expect(
      await screen.findByText('confirm password does not match with password')
    ).toBeInTheDocument()
  })

  it('should render an invalid code', async () => {
    query = {
      code: 'wrong_code'
    }
    render(<FormResetPassword />)

    userEvent.type(screen.getByPlaceholderText('Password'), '12345')
    userEvent.type(screen.getByPlaceholderText(/Confirm password/i), '12345')

    userEvent.click(screen.getByRole('button', { name: 'Reset Password' }))

    expect(
      await screen.findByText('Incorrect code provided')
    ).toBeInTheDocument()
  })

  it('should render a valid code', async () => {
    query = { code: 'right_code' }
    render(<FormResetPassword />)

    userEvent.type(screen.getByPlaceholderText('Password'), '12345')
    userEvent.type(screen.getByPlaceholderText(/Confirm password/i), '12345')

    userEvent.click(screen.getByRole('button', { name: 'Reset Password' }))

    await waitFor(() => {
      expect(signIn).toHaveBeenCalledWith('credentials', {
        email: 'valid@email.com',
        password: '12345',
        callbackUrl: '/'
      })
    })
  })
})

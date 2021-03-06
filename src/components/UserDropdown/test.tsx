import userEvent from '@testing-library/user-event'
import { render, screen } from 'utils/test-utils'

import UserDropdown from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const query = {}
useRouter.mockImplementation(() => ({
  query
}))

describe('<UserDropdown />', () => {
  it('should render userName', () => {
    render(<UserDropdown userName="Brenno" />)

    expect(screen.getByText('Brenno')).toBeInTheDocument()
  })

  it('should render the popUp', () => {
    render(<UserDropdown userName="Brenno" />)

    //open popUp
    userEvent.click(screen.getByText('Brenno'))

    expect(
      screen.getByRole('link', { name: /My profile/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /Wishlist/i })).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /^Sign out/i })
    ).toBeInTheDocument()
  })
})

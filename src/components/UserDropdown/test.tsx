import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import UserDropdown from '.'

describe('<UserDropdown />', () => {
  it('should render userName', () => {
    renderWithTheme(<UserDropdown userName="Brenno" />)

    expect(screen.getByText('Brenno')).toBeInTheDocument()
  })

  it('should render the popUp', () => {
    renderWithTheme(<UserDropdown userName="Brenno" />)

    //open popUp
    userEvent.click(screen.getByText('Brenno'))

    expect(
      screen.getByRole('link', { name: /My profile/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /Wishlist/i })).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /Sign out/i })
    ).toBeInTheDocument()
  })
})

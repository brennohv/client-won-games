import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ProfileMenu from '.'

describe('<ProfileMenu />', () => {
  it('should render correctly', () => {
    renderWithTheme(<ProfileMenu />)

    expect(
      screen.getByRole('link', { name: /My profile/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Sign out/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /My cards/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /My orders/i })).toBeInTheDocument()
  })
})

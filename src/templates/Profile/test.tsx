import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Profile from '.'

describe('<Profile />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <Profile>
        <h1>teste</h1>
      </Profile>
    )

    expect(
      screen.getByRole('heading', { name: /My account/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /teste/i })).toBeInTheDocument()
  })
})

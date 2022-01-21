import theme from 'styles/theme'
import { render, screen } from 'utils/test-utils'

import ProfileMenu from '.'

describe('<ProfileMenu />', () => {
  it('should render correctly', () => {
    render(<ProfileMenu />)

    expect(
      screen.getByRole('link', { name: /My profile/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Sign out/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /My cards/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /My orders/i })).toBeInTheDocument()
  })

  it('should render linkActive ', () => {
    render(<ProfileMenu activeLink="/profile/cards" />)

    expect(screen.getByRole('link', { name: /My cards/i })).toHaveStyle({
      background: theme.colors.primary,
      color: theme.colors.white
    })
  })
})

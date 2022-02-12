import theme from 'styles/theme'
import { render, screen } from 'utils/test-utils'

import ProfileMenu from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const query = {}
useRouter.mockImplementation(() => ({
  query
}))

describe('<ProfileMenu />', () => {
  it('should render correctly', () => {
    render(<ProfileMenu />)

    expect(
      screen.getByRole('link', { name: /My profile/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Sign out/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /My orders/i })).toBeInTheDocument()
  })

  it('should render linkActive ', () => {
    render(<ProfileMenu activeLink="/profile/orders" />)

    expect(screen.getByRole('link', { name: /My orders/i })).toHaveStyle({
      background: theme.colors.primary,
      color: theme.colors.white
    })
  })
})

import { render, screen } from 'utils/test-utils'

import FormProfile from '.'

describe('<FormProfile />', () => {
  it('should render correctly', () => {
    render(<FormProfile />)

    expect(
      screen.getByRole('heading', { name: /My profile/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: 'Reset password' })
    ).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument()
  })
})

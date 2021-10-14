import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Auth from '.'

describe('<Auth />', () => {
  it('should render the logos, title, subtitle and children', () => {
    renderWithTheme(
      <Auth title="Auth title">
        <input type="text"></input>
      </Auth>
    )

    //verifique se tem 2 logos
    expect(screen.getAllByLabelText(/won games/i)).toHaveLength(2)
    //verifique se tem o heading principal do banner
    expect(
      screen.getByRole('heading', {
        name: /All your favorite games in one place/i
      })
    ).toBeInTheDocument()
    //verifique se tem o subtitle
    expect(
      screen.getByRole('heading', {
        name: /WON is the best and most complete gaming platform./i
      })
    ).toBeInTheDocument()

    // verfique se tem o title do content
    expect(
      screen.getByRole('heading', { name: /Auth title/i })
    ).toBeInTheDocument()
    // verifique se o children ta sendo renderizado
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})

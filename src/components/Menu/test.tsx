import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Shopping Cart/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Won games/i)).toBeInTheDocument()
  })

  it('should handle the open and close mobile menu ', () => {
    renderWithTheme(<Menu />)

    //selecionar o nosso MenuFull
    const fullMenuElement = screen.getByRole('navigation', { hidden: true })

    //verificar se o menu esta escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    //clicar no botao de menu e verificar se ele abriu
    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    //clicar no botao close e verificar se ele fechou
    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  it('should show register box when logged out', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByText(/Log in now/i)).toBeInTheDocument()
    expect(screen.getByText(/Sign Up/i)).toBeInTheDocument()
    expect(screen.queryByText(/My account/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Wishlist/i)).not.toBeInTheDocument()
  })

  it('should show Wishlist and My account when logged in', () => {
    renderWithTheme(<Menu userName="Brenno" />)

    expect(screen.queryByText(/Log in now/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Sign Up/i)).not.toBeInTheDocument()
    expect(screen.getByText(/My account/i)).toBeInTheDocument()
    expect(screen.getByText(/Wishlist/i)).toBeInTheDocument()
  })
})

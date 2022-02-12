import { fireEvent } from '@testing-library/react'
import { render, screen } from 'utils/test-utils'

import Menu from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const query = {}
useRouter.mockImplementation(() => ({
  query
}))

describe('<Menu />', () => {
  it('should render the menu', () => {
    render(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getAllByLabelText(/Shopping Cart/i)).toHaveLength(2)
    expect(screen.getByLabelText(/Won games/i)).toBeInTheDocument()
  })

  it('should handle the open and close mobile menu ', () => {
    render(<Menu />)

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
    render(<Menu />)

    expect(screen.getAllByText(/Sign in/i)).toHaveLength(2)
    expect(screen.getByText(/Sign Up/i)).toBeInTheDocument()
    expect(screen.queryByText(/My account/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Wishlist/i)).not.toBeInTheDocument()
  })

  it('should show Wishlist and My account when logged in', () => {
    render(<Menu userName="Brenno" />)

    expect(screen.queryByText(/Sign in/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Sign Up/i)).not.toBeInTheDocument()
    expect(screen.getByText(/My account/i)).toBeInTheDocument()
    expect(screen.getAllByText(/Wishlist/i)).toHaveLength(2)
  })

  it('should do not render MenuGroup and MenuFull when passed loading', () => {
    render(<Menu userName="Brenno" loading />)

    expect(screen.queryByText(/Sign in/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Brenno/i)).not.toBeInTheDocument()
  })
})

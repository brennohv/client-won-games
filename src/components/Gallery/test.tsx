import 'match-media-mock'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Gallery from '.'
import images from './mock'

describe('<Gallery />', () => {
  it('should render with 4 active items', () => {
    const { container } = renderWithTheme(<Gallery images={images} />)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should handle open modal', () => {
    renderWithTheme(<Gallery images={images} />)

    const modal = screen.getByLabelText('modal')

    //verificar se o modal esta escondido
    expect(modal).toHaveAttribute('aria-hiden', 'true')
    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' })

    //quando clicar no button eu abra o modal
    fireEvent.click(screen.getByRole('button', { name: /Gallery Image 1/i }))
    expect(modal).toHaveAttribute('aria-hiden', 'false')
    expect(modal).toHaveStyle({ opacity: 1 })
  })

  it('should handle close modal', () => {
    renderWithTheme(<Gallery images={images} />)

    const modal = screen.getByLabelText('modal')

    //quando clicar no button eu abra o modal
    fireEvent.click(screen.getByRole('button', { name: /Gallery Image 1/i }))
    expect(modal).toHaveAttribute('aria-hiden', 'false')

    //quando clicar no button close eu feche o modal
    fireEvent.click(screen.getByRole('button', { name: /Close modal/i }))
    expect(modal).toHaveAttribute('aria-hiden', 'true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })
})

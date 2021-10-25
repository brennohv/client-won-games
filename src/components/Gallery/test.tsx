import 'match-media-mock'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Gallery from '.'
import images from './mock'

describe('<Gallery />', () => {
  it('should render thumbnails as buttons', () => {
    renderWithTheme(<Gallery images={images.slice(0, 2)} />)

    expect(
      screen.getByRole('button', { name: /Gallery Image 1/i })
    ).toHaveAttribute('src', images[0].src)

    expect(
      screen.getByRole('button', { name: /Gallery Image 2/i })
    ).toHaveAttribute('src', images[1].src)
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

  it('should handle with close modal when overlay or button clicked', () => {
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

  it('should handle with close modal when ESC pressed', () => {
    const { container } = renderWithTheme(<Gallery images={images} />)

    const modal = screen.getByLabelText('modal')

    //quando clicar no button eu abra o modal
    fireEvent.click(screen.getByRole('button', { name: /Gallery Image 1/i }))

    //quando clicar no button close eu feche o modal
    fireEvent.keyUp(container, { key: 'Escape' })
    expect(modal).toHaveAttribute('aria-hiden', 'true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })

  it('should open modal with selected image', async () => {
    renderWithTheme(<Gallery images={images} />)

    //quando clicar no button eu abra o modal
    fireEvent.click(screen.getByRole('button', { name: /Gallery Image 1/i }))

    //quando clicar no button close eu feche o modal
    const img = await screen.findByRole('img', {
      name: /Gallery-Gallery Image 1/i
    })
    expect(img.parentElement?.parentElement).toHaveClass('slick-active')
  })
})

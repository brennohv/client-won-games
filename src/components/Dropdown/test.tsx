import userEvent from '@testing-library/user-event'
import { render, screen } from 'utils/test-utils'

import Dropdown from '.'

describe('<Dropdown />', () => {
  beforeEach(() => {
    const title = <h1 aria-label="toogle dropdown">Click here</h1>

    render(
      <Dropdown title={title}>
        <span>content</span>
      </Dropdown>
    )
  })

  it('should render title', () => {
    expect(screen.getByLabelText(/toogle dropdown/)).toBeInTheDocument()
  })

  it('should handle open/close dropdown ', () => {
    const content = screen.getByText(/content/).parentElement!

    expect(content).toHaveStyle({
      opacity: 0
    })
    expect(content).toHaveAttribute('aria-hidden', 'true')

    userEvent.click(screen.getByLabelText(/toogle dropdown/))

    expect(content).toHaveStyle({
      opacity: 1
    })
    expect(content).toHaveAttribute('aria-hidden', 'false')
  })

  it('should render Overlay correctely', () => {
    const content = screen.getByText(/content/).parentElement!
    const overlay = content.nextElementSibling

    expect(overlay).toHaveAttribute('aria-hidden', 'true')

    userEvent.click(screen.getByLabelText('toogle dropdown'))

    expect(overlay).toHaveAttribute('aria-hidden', 'false')
    expect(overlay).toHaveStyle({ opacity: '1' })

    userEvent.click(overlay!)

    expect(overlay).toHaveAttribute('aria-hidden', 'true')
    expect(overlay).toHaveStyle({ opacity: '0' })
  })
})

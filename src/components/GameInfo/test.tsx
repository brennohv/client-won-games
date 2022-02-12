import 'session.mock'
import 'next-image-mock'
import { render, screen } from 'utils/test-utils'

import GameInfo from '.'

const props = {
  id: '1',
  title: 'My title',
  description: 'Game description',
  price: 200
}

describe('<GameInfo />', () => {
  it('should render the game informations', () => {
    const { container } = render(<GameInfo {...props} />)

    // renderizar o heading(title)
    expect(
      screen.getByRole('heading', { name: 'My title' })
    ).toBeInTheDocument()
    // renderizar description
    expect(screen.getByText(props.description)).toBeInTheDocument()
    // renderizar o price
    expect(screen.getByText(/€200.00/)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render FREE when 0', () => {
    render(<GameInfo {...props} price={0} />)
    expect(screen.getByText(/FREE/)).toBeInTheDocument()
  })
})

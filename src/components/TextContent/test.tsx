import theme from 'styles/theme'
import { render, screen } from 'utils/test-utils'
import TextContent from '.'

const props = {
  title: 'Description',
  content: '<h1>Ola</h1>'
}

describe('<TextContent />', () => {
  it('should render the title and content', () => {
    render(<TextContent {...props} />)

    expect(
      screen.getByRole('heading', { name: /Description/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Ola/i })).toBeInTheDocument()
  })

  it('should render without title', () => {
    render(<TextContent content={props.content} />)

    expect(
      screen.queryByRole('heading', { name: /Description/i })
    ).not.toBeInTheDocument()
  })

  it('should render colors Wrapper', () => {
    render(<TextContent {...props} />)

    const wrapper = screen.getByRole('heading', {
      name: /Description/i
    }).parentElement

    expect(wrapper).toHaveStyle({
      color: theme.colors.white
    })

    expect(wrapper).toHaveStyleRule('color', '#030517', {
      media: '(min-width: 768px)'
    })
  })
})

import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'
import TextContent from '.'

const props = {
  title: 'Description',
  content: '<h1>Ola</h1>'
}

describe('<TextContent />', () => {
  it('should render the title and content', () => {
    renderWithTheme(<TextContent {...props} />)

    expect(
      screen.getByRole('heading', { name: /Description/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Ola/i })).toBeInTheDocument()
  })

  it('should render without title', () => {
    renderWithTheme(<TextContent content={props.content} />)

    expect(
      screen.queryByRole('heading', { name: /Description/i })
    ).not.toBeInTheDocument()
  })

  it('should render colors Wrapper', () => {
    renderWithTheme(<TextContent {...props} />)

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

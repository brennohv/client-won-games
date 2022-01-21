import { render } from 'utils/test-utils'
import { Divider } from '.'

describe('<Divider />', () => {
  it('should render correctly', () => {
    const { container } = render(<Divider />)

    expect(container.firstChild).toMatchInlineSnapshot(`
.c0 {
  height: 0.1rem;
  background: rgba(181,181,181,0.3);
  border: 0;
  margin: 4.8rem auto 5.6rem;
}

@media (min-width:768px) {
  .c0 {
    margin: calc(5.6rem * 2) auto calc(4.8rem * 2);
  }
}

<hr
  class="c0"
/>
`)
  })
})

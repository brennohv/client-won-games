import { renderWithTheme } from 'utils/tests/helpers'

import { FormWrapper, FormLink } from '.'

describe('<Form />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <FormWrapper>
        <FormLink>
          {' '}
          My nice <a href="#">link</a>
        </FormLink>
      </FormWrapper>
    )

    expect(container.parentElement).toMatchInlineSnapshot(`
.c0 {
  font-size: 1.4rem;
  text-align: center;
}

.c0 a {
  -webkit-text-decoration: none;
  text-decoration: none;
  color: #3CD3C1;
  border-bottom: 0.1rem solid #3CD3C1;
}

.c0 a:hover {
  color: #29b3a3;
  border-bottom: 0.1rem solid #29b3a3;
}

<body>
  <div>
    <div
      class=""
    >
      <div
        class="c0"
      >
         
        My nice 
        <a
          href="#"
        >
          link
        </a>
      </div>
    </div>
  </div>
</body>
`)
  })
})

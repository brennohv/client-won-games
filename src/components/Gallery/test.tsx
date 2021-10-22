import 'match-media-mock'
// import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Gallery from '.'
import images from './mock'

describe('<Gallery />', () => {
  it('should render with 4 active items', () => {
    const { container } = renderWithTheme(<Gallery images={images} />)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })
})

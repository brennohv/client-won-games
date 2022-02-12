/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/display-name */
/* eslint-disable no-import-assign */

import * as nextImage from 'next/image'

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => {
    const { objectFit, ...rest } = props
    return <img {...rest} />
  }
})

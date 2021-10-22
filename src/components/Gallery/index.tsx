import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'

import Slider, { SliderSettings } from 'components/Slider'
import * as S from './styles'

const settings: SliderSettings = {
  arrows: true,
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    }
  ],
  prevArrow: <ArrowLeft aria-label="Previous img" />,
  nextArrow: <ArrowRight aria-label="Next img" />
}

type Images = {
  src: string
  label: string
}

export type GalleryProps = {
  images: Images[]
}

const Gallery = ({ images }: GalleryProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {images.map((image, index) => (
        <S.Image
          role={'button'}
          key={`thumb-${index}`}
          src={image.src}
          alt={image.label}
        ></S.Image>
      ))}
    </Slider>
  </S.Wrapper>
)

export default Gallery

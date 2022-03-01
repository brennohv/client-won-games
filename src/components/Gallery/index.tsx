import { useEffect, useRef, useState } from 'react'
import { Close } from '@styled-icons/material-outlined'
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'
import SlickSlider from 'react-slick'

import Slider, { SliderSettings } from 'components/Slider'

import * as S from './styles'

const commonSettings: SliderSettings = {
  arrows: true,
  infinite: false,
  lazyLoad: 'ondemand',
  prevArrow: <ArrowLeft aria-label="Previous img" />,
  nextArrow: <ArrowRight aria-label="Next img" />
}

const settings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 4,
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
  ]
}

const modalSettings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 1
}

export type GalleryImagesProps = {
  src: string
  label: string
}

export type GalleryProps = {
  images: GalleryImagesProps[]
}

const Gallery = ({ images }: GalleryProps) => {
  const slider = useRef<SlickSlider>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setIsOpen(false)
    }

    window.addEventListener('keyup', handleKeyUp)
    return () => {
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  return (
    <S.Wrapper>
      <Slider ref={slider} settings={settings}>
        {images.map((image, index) => (
          <S.Image
            onClick={() => {
              setIsOpen(true)
              slider.current!.slickGoTo(index, true)
            }}
            role={'button'}
            key={`thumb-${index}`}
            src={image.src}
            alt={`Thumb - ${image.label}`}
          ></S.Image>
        ))}
      </Slider>

      <S.Modal aria-label="modal" aria-hidden={!isOpen} isOpen={isOpen}>
        <S.Close
          role="button"
          aria-label="Close modal"
          onClick={() => setIsOpen(false)}
        >
          <Close size={40} />
        </S.Close>
        <S.Content>
          <Slider ref={slider} settings={modalSettings}>
            {images.map((image, index) => (
              <S.Image
                onClick={() => setIsOpen(true)}
                key={index}
                src={image.src}
                alt={`Gallery-${image.label}`}
              ></S.Image>
            ))}
          </Slider>
        </S.Content>
      </S.Modal>
    </S.Wrapper>
  )
}

export default Gallery

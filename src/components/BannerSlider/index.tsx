import Banner, { BannerProps } from 'components/Banner'
import Slider, { SliderSettings } from 'components/Slider'

import * as S from './styles'

export type BannerSliderProps = {
  banners: BannerProps[]
}

const settings: SliderSettings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }
  ]
}

const BannerSlider = ({ banners }: BannerSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {banners.map((item) => (
        <Banner key={item.title} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default BannerSlider

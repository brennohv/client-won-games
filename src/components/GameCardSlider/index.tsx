import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'

import GameCard, { GameCardProps } from 'components/GameCard'
import Slider, { SliderSettings } from 'components/Slider'
import * as S from './styles'

export type GameCardSliderProps = {
  gameCards: GameCardProps[]
  color?: 'white' | 'black'
}

const settings: SliderSettings = {
  infinite: false,
  slidesToShow: 4,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1
      }
    }
  ],
  prevArrow: <ArrowLeft aria-label="Previous games" />,
  nextArrow: <ArrowRight aria-label="Next games" />
}

const GameCardSlider = ({
  gameCards,
  color = 'white'
}: GameCardSliderProps) => (
  <S.Wrapper color={color}>
    <Slider settings={settings}>
      {gameCards.map((gameCard, index) => (
        <GameCard key={index} {...gameCard}></GameCard>
      ))}
    </Slider>
  </S.Wrapper>
)

export default GameCardSlider

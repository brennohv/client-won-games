import { GameCardProps } from 'components/GameCard'
import GameCardSlider from 'components/GameCardSlider'
import Heading from 'components/Heading'
import Highlight, { HighlightProps } from 'components/Highlight'
import * as S from './styles'

export type ShowCaseProps = {
  heading?: string
  gameCardSlider?: GameCardProps[]
  gameCardColor?: 'white' | 'black'
  highlight?: HighlightProps
}

const Showcase = ({
  heading,
  gameCardSlider,
  highlight,
  gameCardColor
}: ShowCaseProps) => (
  <S.Wrapper data-cy={heading || 'showcase'}>
    {!!heading && (
      <Heading lineLeft lineColor="secondary">
        {heading}
      </Heading>
    )}
    {!!highlight && <Highlight {...highlight} />}

    {!!gameCardSlider && (
      <GameCardSlider color={gameCardColor} gameCards={gameCardSlider} />
    )}
  </S.Wrapper>
)

export default Showcase

// preciso instanciar o component se tiver heading coloque o heading

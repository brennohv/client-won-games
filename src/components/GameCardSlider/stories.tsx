import { Story, Meta } from '@storybook/react'
import GameCardSlider, { GameCardSliderProps } from '.'
import gameCards from './mock'

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  args: { gameCards },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<GameCardSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameCardSlider {...args} />
  </div>
)

import { Story, Meta } from '@storybook/react'
import Showcase, { ShowCaseProps } from '.'
import HighLightMock from 'components/Highlight/mock'
import GameCardMock from 'components/GameCardSlider/mock'

export default {
  title: 'Showcase',
  component: Showcase,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<ShowCaseProps> = (args) => (
  <div style={{ margin: '0 auto' }}>
    <Showcase {...args} />
  </div>
)

Default.args = {
  heading: 'News',
  highlight: HighLightMock,
  gameCardSlider: GameCardMock
}

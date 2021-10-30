import { Story, Meta } from '@storybook/react'
import GameItem, { GameItemProps } from '.'

export default {
  title: 'GameItem',
  component: GameItem,
  args: {
    title: 'Red Dead Redemption',
    price: '$215,00',
    img: 'https://source.unsplash.com/user/willianjusten/151x70'
  }
} as Meta

export const Default: Story<GameItemProps> = (args) => <GameItem {...args} />

export const WithDownload: Story<GameItemProps> = (args) => (
  <GameItem {...args} />
)

WithDownload.args = {
  linkDownload: 'http:teste'
}

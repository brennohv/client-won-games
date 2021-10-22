import { Story, Meta } from '@storybook/react'
import TextContent, { TextContentProps } from '.'
import TextContentMock from './mock'

export default {
  title: 'game/TextContent',
  component: TextContent,
  args: TextContentMock,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<TextContentProps> = (args) => (
  <TextContent {...args} />
)

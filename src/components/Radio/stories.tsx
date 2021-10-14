import { Story, Meta } from '@storybook/react'
import Radio, { RadioProps } from '.'

export default {
  title: 'Form/Radio',
  component: Radio,
  argTypes: {
    onCheck: { action: 'checked' }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<RadioProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Radio
        name="teste"
        label="primeiro"
        value="primeiro"
        labelFor="primeiro"
        id="primeiro"
        defaultChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        name="teste"
        id="segundo"
        label="segundo"
        value="segundo"
        labelFor="segundo"
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        name="teste"
        label="terceiro"
        value="terceiro"
        labelFor="terceiro"
        id="terceiro"
        {...args}
      />
    </div>
  </>
)

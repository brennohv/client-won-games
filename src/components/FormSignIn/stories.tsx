import { Story, Meta } from '@storybook/react'
import FormSignIn from '.'

export default {
  title: 'form/FormSignIn',
  component: FormSignIn
} as Meta

export const Default: Story = () => (
  <div style={{ width: '30rem', margin: 'auto' }}>
    <FormSignIn />
  </div>
)

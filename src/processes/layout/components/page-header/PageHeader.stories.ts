import type { Meta, StoryObj } from '@storybook/react'

import { StorybookDecorator } from '@/state/StorybookDecorator'

import { PageHeader } from './PageHeader'

const meta = {
  argTypes: {},
  component: PageHeader,
  decorators: [StorybookDecorator],
  tags: ['autodocs'],
  title: '🟤Processes/layout/components/PageHeader',
} satisfies Meta<typeof PageHeader>

export default meta
type Story = StoryObj<typeof meta>

export const SignUpPageHeaderStory: Story = {
  args: {
    decider: true,
  },
}

export const NotSignUpPageHeaderStory: Story = {
  args: {
    decider: false,
  },
}

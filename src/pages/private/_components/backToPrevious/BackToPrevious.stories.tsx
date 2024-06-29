import type { Meta, StoryObj } from '@storybook/react'

import { StorybookDecorator } from '@/state/StorybookDecorator'

import { BackToPrevious } from './BackToPrevious'

const meta = {
  argTypes: {},
  component: BackToPrevious,
  decorators: [StorybookDecorator],
  tags: ['autodocs'],
  title: '🟣Pages/private/components/BackToPrevious',
} satisfies Meta<typeof BackToPrevious>

export default meta
type Story = StoryObj<typeof meta>

// ===========================================================================
export const DefaultBackToPrevious: Story = {
  args: {
    title: 'Back to Decks List',
  },
}

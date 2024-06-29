import type { Meta, StoryObj } from '@storybook/react'

import { LineLoader } from './LineLoader'

const meta = {
  component: LineLoader,
  tags: ['autodocs'],
  title: '🟤Processes/layout/components/LineLoader',
} satisfies Meta<typeof LineLoader>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

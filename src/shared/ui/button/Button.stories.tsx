import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from '@/shared'

import { Button } from './Button'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
  },
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: '🟢UI/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

//========================================================================================
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
    variant: 'primary',
  },
}
export const PrimaryDisabled: Story = {
  args: {
    children: 'Primary Disabled Button',
    disabled: true,
    variant: 'primary',
  },
}
export const PrimaryFullWidth: Story = {
  args: {
    children: 'Primary Full Width Button',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
  parameters: {
    layout: 'padded',
  },
}

export const PrimaryWithImg: Story = {
  args: {
    children: (
      <>
        <Icon height={'16px'} iconId={'logOut'} width={'16px'} />
        Primary With Img Button
      </>
    ),
    disabled: false,
    img: true,
    variant: 'primary',
  },
}
export const PrimaryDisabledWithImg: Story = {
  args: {
    children: (
      <>
        <Icon height={'16px'} iconId={'logOut'} width={'16px'} />
        Primary Disabled With Img Button
      </>
    ),
    disabled: true,
    variant: 'primary',
  },
}
export const PrimaryFullWidthWithImg: Story = {
  args: {
    children: (
      <>
        <Icon height={'16px'} iconId={'logOut'} width={'16px'} />
        Primary Full Width With Img Button
      </>
    ),
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
  parameters: {
    layout: 'padded',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    disabled: false,
    variant: 'secondary',
  },
}
export const SecondaryDisabled: Story = {
  args: {
    children: 'Secondary Disabled Button',
    disabled: true,
    variant: 'secondary',
  },
}
export const SecondaryFullWidth: Story = {
  args: {
    children: 'Secondary Full Width Button',
    disabled: false,
    fullWidth: true,
    variant: 'secondary',
  },
  parameters: {
    layout: 'padded',
  },
}

export const SecondaryWithImg: Story = {
  args: {
    children: (
      <>
        <Icon height={'16px'} iconId={'logOut'} width={'16px'} />
        Secondary With Img Button
      </>
    ),
    disabled: false,
    img: true,
    variant: 'secondary',
  },
}
export const SecondaryDisabledWithImg: Story = {
  args: {
    children: (
      <>
        <Icon height={'16px'} iconId={'logOut'} width={'16px'} />
        Secondary Disabled With Img Button
      </>
    ),
    disabled: true,
    variant: 'secondary',
  },
}
export const SecondaryFullWidthWithImg: Story = {
  args: {
    children: (
      <>
        <Icon height={'16px'} iconId={'logOut'} width={'16px'} />
        Secondary Full Width With Img Button
      </>
    ),
    disabled: false,
    fullWidth: true,
    variant: 'secondary',
  },
  parameters: {
    layout: 'padded',
  },
}

export const Link: Story = {
  args: {
    children: 'Link Button',
    disabled: false,
    variant: 'link',
  },
}
export const LinkDisabled: Story = {
  args: {
    children: 'Link Disabled Button',
    disabled: true,
    variant: 'link',
  },
}
export const LinkFullWidth: Story = {
  args: {
    children: 'Link Full Width Button',
    disabled: false,
    fullWidth: true,
    variant: 'link',
  },
  parameters: {
    layout: 'padded',
  },
}

export const LinkWithImg: Story = {
  args: {
    children: (
      <>
        <Icon height={'16px'} iconId={'arrowBackOutline'} width={'16px'} />
        Link With Img Button
      </>
    ),
    disabled: false,
    variant: 'link',
  },
}
export const LinkDisabledWithImg: Story = {
  args: {
    children: (
      <>
        <Icon height={'16px'} iconId={'arrowBackOutline'} width={'16px'} />
        Link Disabled With Img Button
      </>
    ),
    disabled: true,
    variant: 'link',
  },
}
export const LinkFullWidthWithImg: Story = {
  args: {
    children: (
      <>
        <Icon height={'16px'} iconId={'arrowBackOutline'} width={'16px'} />
        Link Full Width With Img Button
      </>
    ),
    disabled: false,
    fullWidth: true,
    variant: 'link',
  },
  parameters: {
    layout: 'padded',
  },
}

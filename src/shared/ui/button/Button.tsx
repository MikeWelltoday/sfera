import { ComponentPropsWithoutRef, ElementType } from 'react'

import { Typography } from '@/shared'
import { clsx } from 'clsx'

import s from './Button.module.scss'

type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  classNameText?: string
  fullWidth?: boolean
  variant?: 'link' | 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const {
    as: Component = 'button',
    children,
    className,
    classNameText,
    fullWidth,
    variant = 'primary',
    ...rest
  } = props

  return (
    <Component
      className={clsx(s.button, s[variant], fullWidth && s.fullWidth, className)}
      {...rest}
    >
      <Typography.Subtitle2 className={classNameText}>{children}</Typography.Subtitle2>
    </Component>
  )
}

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { Link } from 'react-router-dom'

import { Button, Typography } from '@/shared'

import s from './PageHeader.module.scss'

import logo from './Logo.png'
import avatar from './avatar.png'
import { DropdownProfile } from './dropdown-profile/DropdownProfile'

type PageHeaderProps = { decider: boolean } & ComponentPropsWithoutRef<'header'>

export const PageHeader = forwardRef<ElementRef<'header'>, PageHeaderProps>(({ decider }, ref) => {
  const logoutHandler = () => {
    console.log('LogOut')
  }

  return (
    <header ref={ref}>
      <div className={s.wrapper}>
        <div>
          <img alt={'Project Picture'} className={s.projectPicture} src={logo} />
        </div>

        <Button as={'a'} classNameText={s.buttonText} variant={'link'}>
          ГЛАВНАЯ
        </Button>
        <Button as={'a'} classNameText={s.buttonText} variant={'link'}>
          Магазин 3D решений
        </Button>
        <Button as={'a'} classNameText={s.buttonText} variant={'link'}>
          Контакты
        </Button>

        {decider ? (
          <div className={s.profileInfo}>
            <div>
              <Typography.Subtitle1>Profile Name</Typography.Subtitle1>
            </div>
            <DropdownProfile
              email={'user@yandex.com'}
              logout={logoutHandler}
              name={'User'}
              photo={avatar}
              photoDescription={`User - avatar`}
            />
          </div>
        ) : (
          <Button as={Link} to={'/decks'} variant={'primary'}>
            Sign In
          </Button>
        )}
      </div>
    </header>
  )
})

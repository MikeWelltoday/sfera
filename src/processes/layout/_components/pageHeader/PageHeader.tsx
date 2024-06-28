import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { Link } from 'react-router-dom'

import { DropdownProfile } from '@/processes/layout/_components'
import { Button, PATH, Typography } from '@/shared'

import s from './PageHeader.module.scss'

import logo from './Logo.png'
import avatar from './avatar.png'

type PageHeaderProps = { decider: boolean } & ComponentPropsWithoutRef<'header'>

export const PageHeader = forwardRef<ElementRef<'header'>, PageHeaderProps>(({ decider }, ref) => {
  const logoutHandler = () => {
    console.log('LogOut')
  }

  return (
    <header ref={ref}>
      <div className={s.wrapper}>
        <Link to={PATH.MAINPAGE}>
          <img alt={'Sphere Picture Logo'} className={s.projectPicture} src={logo} />
        </Link>

        <Button as={Link} classNameText={s.buttonText} to={PATH.MAINPAGE} variant={'secondary'}>
          ГЛАВНАЯ
        </Button>
        <Button
          as={Link}
          classNameText={s.buttonText}
          to={PATH.SHOPDECISIONS}
          variant={'secondary'}
        >
          Магазин 3D решений
        </Button>
        <Button as={Link} classNameText={s.buttonText} to={PATH.CONTACTS} variant={'secondary'}>
          Контакты
        </Button>

        {decider ? (
          <div className={s.profileInfo}>
            <Link to={PATH.PROFILE}>
              <Typography.Subtitle1>Profile Name</Typography.Subtitle1>
            </Link>
            <DropdownProfile
              email={'user@yandex.com'}
              logout={logoutHandler}
              name={'User'}
              photo={avatar}
              photoDescription={`User - avatar`}
            />
          </div>
        ) : (
          <Button as={Link} to={PATH.SIGNIN} variant={'primary'}>
            Sign In
          </Button>
        )}
      </div>
    </header>
  )
})

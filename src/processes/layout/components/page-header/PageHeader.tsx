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
        <Link to={'#'}>
          <img alt={'Project Picture'} className={s.projectPicture} src={logo} />
        </Link>

        {decider ? (
          <div className={s.profileInfo}>
            <Link to={'#'}>
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
          <Button as={Link} to={'#'} variant={'primary'}>
            Sign In
          </Button>
        )}
      </div>
    </header>
  )
})

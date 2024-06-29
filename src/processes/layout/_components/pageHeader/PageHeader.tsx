import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { DropdownProfile } from '@/processes/layout/_components'
import { Button, PATH, Typography } from '@/shared'
import { authActions, authSelectors } from '@/state/slices/auth/authSlice'
import { useAppDispatch } from '@/state/store'

import s from './PageHeader.module.scss'

import logo from './Logo.png'

type PageHeaderProps = {} & ComponentPropsWithoutRef<'header'>

export const PageHeader = forwardRef<ElementRef<'header'>, PageHeaderProps>((_, ref) => {
  const dispatch = useAppDispatch()
  const me = useSelector(authSelectors.me)

  console.log(me)
  const logOutHandler = () => {
    dispatch(authActions.logout())
  }
  const decider = true

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
              <Typography.Subtitle1>{me.name}</Typography.Subtitle1>
            </Link>
            <DropdownProfile
              email={me.email}
              logout={logOutHandler}
              name={me.name}
              photo={me.avatar}
              photoDescription={`${me.name} - avatar`}
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

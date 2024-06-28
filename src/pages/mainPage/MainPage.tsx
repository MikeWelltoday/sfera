import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { Button, PATH, Page } from '@/shared'
import { v1 } from 'uuid'

import s from './MainPage.module.scss'

type MainButtonsData = {
  Children: ReactNode
  className: string
  id: string
  path: string
}

export const MainPage = () => {
  const mainButtonsData: MainButtonsData[] = [
    {
      Children: 'О нас',
      className: s.aboutUs,
      id: v1(),
      path: PATH.ABOUTUS,
    },
    {
      Children: 'Краткая инструкция для заказчиков',
      className: s.shortCustomersInstruction,
      id: v1(),
      path: PATH.SHORTCUSTOMERSINSTRUCTION,
    },
    {
      Children: 'Регистрация заказчиков',
      className: s.customersRegistration,
      id: v1(),
      path: PATH.CUSTOMERSREGISTRATION,
    },
    {
      Children: 'Краткая инструкция для исполнителей',
      className: s.shortExecutorsInstruction,
      id: v1(),
      path: PATH.SHORTEXECUTORSINSTRUCTION,
    },
    {
      Children: 'Регистрация исполнителей',
      className: s.executorsRegistration,
      id: v1(),
      path: PATH.EXECUTORSREGISTRATION,
    },
    {
      Children: 'Контакты',
      className: s.contacts,
      id: v1(),
      path: PATH.CONTACTS,
    },
  ]

  return (
    <Page>
      {mainButtonsData.map(button => {
        return (
          <Button
            as={Link}
            className={button.className}
            classNameText={s.buttonText}
            key={button.id}
            to={button.path}
          >
            {button.Children}
          </Button>
        )
      })}
    </Page>
  )
}

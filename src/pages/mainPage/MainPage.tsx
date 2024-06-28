import { ReactNode, useId } from 'react'
import { Link } from 'react-router-dom'

import { Button, PATH, Page } from '@/shared'

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
      id: useId(),
      path: PATH.ABOUTUS,
    },
    {
      Children: 'Краткая инструкция для заказчиков',
      className: s.shortCustomersInstruction,
      id: useId(),
      path: PATH.SHORTCUSTOMERSINSTRUCTION,
    },
    {
      Children: 'Регистрация заказчиков',
      className: s.customersRegistration,
      id: useId(),
      path: PATH.CUSTOMERSREGISTRATION,
    },
    {
      Children: 'Краткая инструкция для исполнителей',
      className: s.shortExecutorsInstruction,
      id: useId(),
      path: PATH.SHORTEXECUTORSINSTRUCTION,
    },
    {
      Children: 'Регистрация исполнителей',
      className: s.executorsRegistration,
      id: useId(),
      path: PATH.EXECUTORSREGISTRATION,
    },
    {
      Children: 'Контакты',
      className: s.contacts,
      id: useId(),
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

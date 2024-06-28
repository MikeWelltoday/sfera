import { ReactNode } from 'react'
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
      id: '4 - О нас',
      path: PATH.ABOUTUS,
    },
    {
      Children: 'Краткая инструкция для заказчиков',
      className: s.shortInstruction,
      id: '2 - инструкция',
      path: PATH.SHORTINSTRUCTIONS,
    },
    {
      Children: 'Регистрация заказчиков',
      className: s.customersRegistration,
      id: '7 - Регистрация',
      path: PATH.CUSTOMERSREGISTRATION,
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

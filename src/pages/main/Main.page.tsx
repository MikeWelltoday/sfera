import { ReactNode, useEffect, useId, useState } from 'react'
import { Link } from 'react-router-dom'

import { Button, Page, PATH } from '@/shared'

import s from './Main.module.scss'

type MainButtonsData = {
  Children: ReactNode
  className: string
  id: string
  path: string
}

export const MainPage = () => {
  const [data, setData] = useState<any>()

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const result = await response.json()
        setData(result)
      } catch (error) {
        console.error(error)
      }
    }

    fetchAPI()
  }, [])

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
      {data?.results?.map((item: any) => <span key={item?.id}>{item?.name}</span>)}

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

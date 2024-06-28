import { ChangeEvent, useRef, useState } from 'react'

import { EditProfileFormValues } from '@/entities/validationSchemes'
import { HeaderAvatar, IconButton, Typography } from '@/shared'
import { Card } from '@/shared/ui/card/Card'

import s from './EditProfile.module.scss'

import { FormPanel, InfoPanel } from './_components'
import avatar from './avatar.png'

export const EditProfile = () => {
  const [isEditName, setIsEditName] = useState(false)

  const updateProfile = (data: EditProfileFormValues) => {
    setIsEditName(!isEditName)
    console.log(data)
  }

  // Добавили картинку в ref
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Click по кнопке-инпуту аватара
  function handleButtonClick() {
    if (fileInputRef.current !== null) {
      fileInputRef.current.click()
    }
  }

  // Получили картинку, которую загрузил пользователь
  async function imageChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files[0]) {
      console.log(event.target.files[0])

      //** to clean ref to load img with the same name once more  */
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    }
  }

  return (
    <Card className={s.editProfile}>
      <Typography.H1>Personal Information</Typography.H1>
      <div className={s.avatarContainer}>
        <HeaderAvatar
          name={'userName'}
          noHover
          photo={avatar}
          photoDescription={`userName-avatar`}
          style={{ height: '100px', width: '100px' }}
          textStyle={{ fontSize: '70px' }}
        />
        {!isEditName && <IconButton iconId={'editOutline'} onClick={handleButtonClick} />}
        <input
          accept={'image/*'}
          onChange={imageChangeHandler}
          ref={fileInputRef}
          style={{ display: 'none' }}
          type={'file'}
        />
      </div>

      {!isEditName ? (
        <InfoPanel
          editName={() => setIsEditName(!isEditName)}
          email={'email'}
          logout={() => {}}
          name={'name'}
        />
      ) : (
        <FormPanel name={'Name'} onSubmit={updateProfile} />
      )}
    </Card>
  )
}

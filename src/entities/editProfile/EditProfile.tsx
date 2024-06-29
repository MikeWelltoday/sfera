import { ChangeEvent, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import { EditProfileFormValues } from '@/entities/validationSchemes'
import { HeaderAvatar, IconButton, Typography } from '@/shared'
import { Card } from '@/shared/ui/card/Card'
import { authActions, authSelectors } from '@/state/slices/auth/authSlice'
import { useAppDispatch } from '@/state/store'

import s from './EditProfile.module.scss'

import { FormPanel, InfoPanel } from './_components'

export const EditProfile = () => {
  const dispatch = useAppDispatch()

  const me = useSelector(authSelectors.me)

  const [isEditName, setIsEditName] = useState(false)

  const updateProfile = (data: EditProfileFormValues) => {
    setIsEditName(!isEditName)
    dispatch(authActions.update({ ...data }))
  }

  const fileInputRef = useRef<HTMLInputElement>(null)

  function handleButtonClick() {
    if (fileInputRef.current !== null) {
      fileInputRef.current.click()
    }
  }

  async function imageChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files[0]) {
      const newImageURL = URL.createObjectURL(event.target.files[0])

      await dispatch(authActions.update({ avatar: newImageURL }))

      //URL.revokeObjectURL(newImageURL)

      //** to clean ref to load img with the same name once more  */
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    }
  }

  const logOutHandler = () => {
    dispatch(authActions.logout())
  }

  return (
    <Card className={s.editProfile}>
      <Typography.H1>Personal Information</Typography.H1>
      <div className={s.avatarContainer}>
        <HeaderAvatar
          name={me.name}
          noHover
          photo={me.avatar}
          photoDescription={`${me.name}-avatar`}
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
          email={me.email}
          logout={logOutHandler}
          name={me.name}
        />
      ) : (
        <FormPanel name={me.name} onSubmit={updateProfile} />
      )}
    </Card>
  )
}

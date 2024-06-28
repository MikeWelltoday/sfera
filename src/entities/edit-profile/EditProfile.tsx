import { useState } from 'react'

import { HeaderAvatar, IconButton, Typography } from '@/shared'
import { Card } from '@/shared/ui/card/Card'

import s from './EditProfile.module.scss'

import { FormPanel, InfoPanel } from './_components'
import avatar from './avatar.png'

export const EditProfile = () => {
  const [isEditName, setIsEditName] = useState(false)

  const updateProfile = (data: any) => {
    console.log(data)
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
        {!isEditName && <IconButton iconId={'editOutline'} onClick={() => {}} />}
        <input accept={'image/*'} onChange={() => {}} style={{ display: 'none' }} type={'file'} />
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

import { useState } from 'react'

import { Dropdown, HeaderAvatar, Icon, Typography } from '@/shared'

import s from './DropdownProfile.module.scss'

type DropdownProfileProps = {
  email: string
  logout: () => void
  name: string
  photo?: string
  photoDescription: string
}

export const DropdownProfile = ({
  email,
  logout,
  name,
  photo,
  photoDescription,
}: DropdownProfileProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dropdown.Root
      onOpenChange={() => setIsOpen(!isOpen)}
      open={isOpen}
      style={{ height: '50px', width: '50px' }}
      trigger={<HeaderAvatar name={name} photo={photo} photoDescription={photoDescription} />}
    >
      <div className={s.profileItem}>
        <HeaderAvatar name={name} noHover photo={photo} photoDescription={photoDescription} />
        <div>
          <Typography.Subtitle2>{name}</Typography.Subtitle2>
          <Typography.Caption>{email}</Typography.Caption>
        </div>
      </div>
      <Dropdown.Separator />
      <Dropdown.Item>
        <div className={s.iconTextLink} onClick={() => setIsOpen(false)}>
          <Icon iconId={'personOutline'} />
          <Typography.Caption>My profile</Typography.Caption>
        </div>
      </Dropdown.Item>
      <Dropdown.Separator />
      <Dropdown.Item onClick={logout}>
        <div className={s.iconTextLink}>
          <Icon iconId={'logOut'} />
          <Typography.Caption>Sign out</Typography.Caption>
        </div>
      </Dropdown.Item>
    </Dropdown.Root>
  )
}

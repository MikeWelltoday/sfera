import { EditProfile } from '@/entities/edit-profile/EditProfile'
import { BackToDecks } from '@/pages/_components/back-to-decks/BackToDecks'
import { Page } from '@/shared'

import s from './Profile.module.scss'

export const ProfilePage = () => {
  return (
    <Page className={s.wrapper}>
      <BackToDecks className={s.backToPrevious} title={'Back to Previous List'} />
      <EditProfile />
    </Page>
  )
}

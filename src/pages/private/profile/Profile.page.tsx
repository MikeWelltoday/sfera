import { EditProfile } from '@/entities'
import { BackToDecks } from '@/pages/private/_components/back-to-decks/BackToDecks'
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

import { EditProfile } from '@/entities'
import { BackToPrevious } from '@/pages/private/_components'
import { Page } from '@/shared'

import s from './Profile.module.scss'

export const ProfilePage = () => {
  return (
    <Page className={s.wrapper}>
      <BackToPrevious className={s.backToPrevious} title={'Предыдущая страница'} />
      <EditProfile />
    </Page>
  )
}

import { ForgotPassword, ForgotPasswordFormValues } from "@/entities";
import { Page } from '@/shared'

import s from './ForgotPassword.module.scss'

export const ForgotPasswordPage = () => {



  function onSubmitHandler(data: ForgotPasswordFormValues) {
    console.log({...data});
  }


  return (
    <Page className={s.wrapper} mt={'100px'}>
      <ForgotPassword onSubmit={onSubmitHandler} />
    </Page>
  )
}

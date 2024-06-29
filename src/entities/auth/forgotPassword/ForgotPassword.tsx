import { useForm } from 'react-hook-form'

import { Button, Card, Typography } from '@/shared'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './ForgotPassword.module.scss'

import { TextField } from '../../_components'
import { ForgotPasswordFormValues, authSchemes } from '../../validationSchemes'
import { ModalFooter } from '../_components'

type ForgotPasswordProps = {
  onSubmit: (data: ForgotPasswordFormValues) => void
}

export const ForgotPassword = ({ onSubmit }: ForgotPasswordProps) => {
  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm<ForgotPasswordFormValues>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(authSchemes.forgotPassword),
  })

  return (
    <Card className={s.forgotPasswordWrapper}>
      <form className={s.form} noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className={s.inputWrapper}>
          <Typography.H1 className={s.forgotPasswordHeader}>Забыли пароль?</Typography.H1>
          <TextField
            autoComplete={'email'}
            control={control}
            label={'Почта'}
            name={'email'}
            type={'email'}
          />
          <Typography.Body2 className={s.forgotPasswordText}>
            Введите вашу адрес электронной почты и мы пришлем вам инструкции по восстановлению
            пароля.
          </Typography.Body2>
        </div>
        <Button disabled={isSubmitting} fullWidth type={'submit'} variant={'primary'}>
          Отправить инструкцию
        </Button>
      </form>
      <ModalFooter buttonChildren={'Вход'} footerText={'Помните пароль?'} linkPath={'/sign-in'} />
    </Card>
  )
}

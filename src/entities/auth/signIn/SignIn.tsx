import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { ControlledCheckbox, PasswordInput, TextField } from '@/entities'
import { Button, Card, PATH, Typography } from '@/shared'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './SignIn.module.scss'

import { SignInFormValues, authSchemes } from '../../validationSchemes'
import { ModalFooter } from '../_components'

type SingInProps = {
  onSubmit: (data: SignInFormValues) => void
}

export const SignIn = ({ onSubmit }: SingInProps) => {
  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm<SignInFormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: zodResolver(authSchemes.signIn),
  })

  return (
    <Card className={s.signIn}>
      <form className={s.form} noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className={s.inputsWrapper}>
          <Typography.H1>Войти</Typography.H1>
          <TextField
            autoComplete={'email'}
            control={control}
            label={'Почта'}
            name={'email'}
            type={'email'}
          />
          <PasswordInput
            autoComplete={'password'}
            control={control}
            label={'Пароль'}
            name={'password'}
          />
          <ControlledCheckbox control={control} name={'rememberMe'}>
            Запомнить
          </ControlledCheckbox>

          <Typography.Body2 as={Link} className={s.forgotPasswordBox} to={PATH.FORGOTPASSWORD}>
            Забыли пароль?
          </Typography.Body2>
        </div>
        <Button disabled={isSubmitting} fullWidth type={'submit'} variant={'primary'}>
          Вход
        </Button>
      </form>
      <ModalFooter
        buttonChildren={'Зарегистрироваться'}
        footerText={'Не имеете аккаунта?'}
        linkPath={PATH.SIGNUP}
      />
    </Card>
  )
}

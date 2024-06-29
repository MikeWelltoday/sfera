import { useId } from 'react'
import { useForm } from 'react-hook-form'

import { Button, Card, Options, PATH, Typography } from '@/shared'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './SignUp.module.scss'

import { ControlledRadioGroup, PasswordInput, TextField } from '../../_components'
import { SignUpFormValues, authSchemes } from '../../validationSchemes'
import { ModalFooter } from '../_components'

type SingUpProps = {
  onSubmit: (data: SignUpFormValues) => void
}

export const SignUp = ({ onSubmit }: SingUpProps) => {
  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm<SignUpFormValues>({
    defaultValues: {
      confirmPassword: '',
      email: '',
      password: '',
      status: 'customer',
    },
    resolver: zodResolver(authSchemes.signUp),
  })

  const RadioOptions: Options[] = [
    { id: useId(), label: 'Заказчик', value: 'customer' },
    { id: useId(), label: 'Исполнитель', value: 'executor' },
  ]

  return (
    <Card className={s.singUpWrapper}>
      <form className={s.form} noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className={s.inputsWrapper}>
          <Typography.H1 className={s.singUpHeader}>Регистрация</Typography.H1>
          <TextField
            autoComplete={'email'}
            control={control}
            label={'Почта'}
            name={'email'}
            type={'email'}
          />
          <ControlledRadioGroup
            className={s.radio}
            control={control}
            name={'status'}
            options={RadioOptions}
            radioName={'Направление'}
          />
          <PasswordInput
            autoComplete={'new-password'}
            control={control}
            label={'Пароль'}
            name={'password'}
          />
          <PasswordInput
            autoComplete={'new-password'}
            control={control}
            label={'Подтверждение пароля'}
            name={'confirmPassword'}
          />
        </div>
        <Button disabled={isSubmitting} fullWidth type={'submit'} variant={'primary'}>
          Зарегистрироваться
        </Button>
      </form>
      <ModalFooter
        buttonChildren={'Войти'}
        footerText={'Уже имеете аккаунт?'}
        linkPath={PATH.SIGNIN}
      />
    </Card>
  )
}

import { toast } from 'react-toastify'

import { Middleware, MiddlewareAPI, isFulfilled, isRejected } from '@reduxjs/toolkit'

import { authActions } from './slices/auth/authSlice'

export const rtkNotificationsHandler: Middleware =
  (api: MiddlewareAPI) => next => (action: any) => {
    console.log(api)
    if (isRejected(action)) {
      switch (action.type) {
        case authActions.login.rejected.type:
          toast.error('Ошибка авторизации')
          break

        case authActions.update.rejected.type:
          toast.error('Ошибка обновления профиля')
          break

        case authActions.register.rejected.type:
          toast.error('Ошибка регистрации')
          break

        default:
      }
    }

    if (isFulfilled(action)) {
      switch (action.type) {
        case authActions.login.fulfilled.type:
          toast.success('Добро пожаловать')
          break

        case authActions.update.fulfilled.type:
          toast.success('Профиль обновлен')
          break

        case authActions.register.fulfilled.type:
          toast.success('Регистрация прошла успешно')
          break

        default:
      }
    }

    switch (action.type) {
      case authActions.logout.type:
        toast.success('Вы успешно вышли из системы')
        break

      default:
        break
    }

    return next(action)
  }

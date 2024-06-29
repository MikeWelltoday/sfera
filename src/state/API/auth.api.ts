import { LoginArgs, Me, RegisterArgs } from '../slices/auth/authSlice.types'
import avatar from './assets/avatar.png'
import { randomTiming } from './randomTiming.tool'

function me() {
  return new Promise(res => {
    setTimeout(() => {
      res({ avatar: avatar, email: 'admin@yandex.ru', id: 'admin', name: 'admin' } as Me)
    }, randomTiming() * 2)
  })
}

function login(args: LoginArgs) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (args.email === 'admin@yandex.ru' && args.password === 'admin') {
        res(true)
      } else {
        rej(false)
      }
    }, randomTiming())
  })
}

function update(me: Partial<Me>) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (me) {
        res(true)
      } else {
        rej(false)
      }
    }, randomTiming())
  })
}

function register(args: RegisterArgs) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (args) {
        res(true)
      } else {
        rej(false)
      }
    }, randomTiming())
  })
}

export const authApi = {
  login,
  me,
  register,
  update,
}

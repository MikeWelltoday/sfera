import { LoginArgs, Me } from '../slices/auth/authSlice.types'
import { randomTiming } from './randomTiming.tool'

const me = new Promise(res => {
  setTimeout(() => {
    // TODO добавить сюда аватар => можно положить файл в эту папку
    res({ avatar: 'avatar', email: 'admin@yandex.ru', id: 'admin', name: 'admin' } as Me)
  }, randomTiming() * 2)
})

function login({ email, password }: { email: string; password: string; rememberMe?: boolean }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (email === 'admin@yandex.ru' && password === 'admin') {
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

function register(args: LoginArgs) {
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

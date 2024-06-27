import { randomTiming } from './randomTiming.tool'

const me = new Promise(res => {
  setTimeout(() => {
    res(true)
  }, randomTiming())
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

export const authApi = {
  login,
  me,
}

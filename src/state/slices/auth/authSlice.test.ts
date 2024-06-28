import { AuthSlice, authActions, authSlice } from './authSlice'
import { Me } from './authSlice.types'

let startState: AuthSlice

beforeEach(() => {
  startState = {
    me: {} as Me,
  }
})

test('me', () => {
  const meResponse: Me = { avatar: 'avatar', email: 'admin@yandex.ru', id: 'admin', name: 'admin' }
  const action = authActions.me.fulfilled({ me: meResponse }, '', undefined)
  const endState = authSlice(startState, action)

  expect(endState.me).toEqual(meResponse)
  expect(endState.me.name).toBe(meResponse.name)
})

import { AuthSlice, authActions, authSlice } from './authSlice'

let startState: AuthSlice

beforeEach(() => {
  startState = {
    me: false,
  }
})

test('me', () => {
  const action = authActions.me.fulfilled(undefined, '', undefined)
  const endState = authSlice(startState, action)

  expect(endState.me).toBe(true)
})

import { AppState, appActions, appSlice } from './appSlice'

let startState: AppState

beforeEach(() => {
  startState = {
    isInitialized: false,
    status: 'idle',
  }
})

test('setStatus', () => {
  const endState = appSlice(startState, appActions.setStatus({ status: 'loading' }))

  expect(endState.status).toBe('loading')
})

import { AppState } from './appSlice'

let startState: AppState

beforeEach(() => {
  startState = {
    isInitialized: false,
    status: 'idle',
  }
})

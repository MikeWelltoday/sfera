import { appSlice } from '@/state/slices/app/appSlice'
import { configureStore } from '@reduxjs/toolkit'

import { SlicesNames } from './tools/slicesNames'

export const store = configureStore({
  reducer: {
    [SlicesNames.appSlice]: appSlice,
  },
})

export type AppRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store

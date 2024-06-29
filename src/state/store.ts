import { useDispatch } from 'react-redux'

import { configureStore } from '@reduxjs/toolkit'

import { rtkNotificationsHandler } from './rtkNotificationsHandler'
import { appSlice } from './slices/app/appSlice'
import { authSlice } from './slices/auth/authSlice'
import { SlicesNames } from './tools/slicesNames'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(rtkNotificationsHandler),
  reducer: {
    [SlicesNames.appSlice]: appSlice,
    [SlicesNames.authSlice]: authSlice,
  },
})

export type AppRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()

// @ts-ignore
window.store = store

import { PayloadAction, isFulfilled, isPending } from '@reduxjs/toolkit'

import { createAppSlice } from '../../tools/createAppSlice'
import { SlicesNames } from '../../tools/slicesNames'

export type AppState = ReturnType<typeof slice.getInitialState>

type AppStatus = 'idle' | 'loading'

const slice = createAppSlice({
  extraReducers: builder => {
    builder
      .addMatcher(isPending, (state, action: any) => {
        if (action.type === 'auth me') {
          return
        }
        state.status = 'loading'
      })
      .addMatcher(isFulfilled, (state, action: any) => {
        if (action.type === 'auth me') {
          return
        }
        state.status = 'idle'
      })
  },

  initialState: {
    isInitialized: false as boolean,
    status: 'idle' as AppStatus,
  },

  name: SlicesNames.appSlice,

  reducers: creators => {
    return {
      setInitialization: creators.reducer(
        (state, action: PayloadAction<{ isInitialized: boolean }>) => {
          state.isInitialized = action.payload.isInitialized
        }
      ),
      setStatus: creators.reducer((state, action: PayloadAction<{ status: AppStatus }>) => {
        state.status = action.payload.status
      }),
    }
  },

  selectors: {
    isInitialized: sliceState => sliceState.isInitialized,
    status: sliceState => sliceState.status,
  },
})

/** ⛔ SLICE, THUNKS, ACTIONS, SELECTORS иимпортировать напрямую из файла => если через index, то будет ошибка циклической зависимости */

export const appSlice = slice.reducer
export const appActions = slice.actions
export const appSelectors = slice.selectors
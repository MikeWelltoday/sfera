import { authApi } from '@/state/API/auth.api'

import { AppDispatch } from '../../store'
import { createAppSlice } from '../../tools/createAppSlice'
import { SlicesNames } from '../../tools/slicesNames'
import { appActions } from '../app/appSlice'

export type AuthSlice = ReturnType<typeof slice.getInitialState>

const slice = createAppSlice({
  initialState: {
    me: false as boolean,
  },
  name: SlicesNames.authSlice,

  reducers: creators => {
    return {
      login: creators.asyncThunk<
        undefined,
        { email: string; password: string; rememberMe: boolean },
        { rejectValue: null }
      >(async ({ email, password, rememberMe }, thunkAPI) => {
        const res = await authApi.login({ email, password, rememberMe })

        console.log(res)

        if (res) {
          localStorage.setItem('accessToken', 'accessToken')
          localStorage.setItem('freshToken', 'freshToken')

          return
        } else {
          return thunkAPI.rejectWithValue(null)
        }
      }),

      logout: creators.reducer((state, _) => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('freshToken')
        state.me = false
      }),

      me: creators.asyncThunk<undefined, undefined, { rejectValue: null }>(
        async (_, thunkAPI) => {
          const dispatch = thunkAPI.dispatch as AppDispatch
          const res = await authApi.me

          dispatch(appActions.setInitialization({ isInitialized: true }))
          if (res) {
            return
          } else {
            return thunkAPI.rejectWithValue(null)
          }
        },
        {
          fulfilled: state => {
            state.me = true
          },
        }
      ),
    }
  },

  selectors: {
    me: state => state.me,
  },
})

/** ⛔ SLICE, THUNKS, ACTIONS, SELECTORS иимпортировать напрямую из файла => если через index, то будет ошибка циклической зависимости */

export const authSlice = slice.reducer
export const authActions = slice.actions
export const authSelectors = slice.selectors

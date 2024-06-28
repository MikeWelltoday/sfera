import { authApi } from '../../API/auth.api'
import { AppDispatch } from '../../store'
import { createAppSlice } from '../../tools/createAppSlice'
import { SlicesNames } from '../../tools/slicesNames'
import { appActions } from '../app/appSlice'
import { Me } from './authSlice.types'

export type AuthSlice = ReturnType<typeof slice.getInitialState>

const slice = createAppSlice({
  initialState: {
    me: {} as Me,
  },
  name: SlicesNames.authSlice,

  reducers: creators => {
    return {
      login: creators.asyncThunk<
        undefined,
        { email: string; password: string; rememberMe: boolean },
        { rejectValue: null }
      >(async ({ email, password, rememberMe }, thunkAPI) => {
        try {
          console.log('🟣 authSlice__login__pending')
          await authApi.login({ email, password, rememberMe })

          localStorage.setItem('accessToken', 'accessToken')
          localStorage.setItem('freshToken', 'freshToken')
          console.log('🟣 authSlice__login__fulfilled')
        } catch (error) {
          console.log('🟣 authSlice__login__rejected')

          return thunkAPI.rejectWithValue(null)
        }
      }),

      logout: creators.reducer((state, _) => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('freshToken')
        state.me = {} as Me
      }),

      me: creators.asyncThunk<{ me: Me }, undefined, { rejectValue: null }>(
        async (_, thunkAPI) => {
          const dispatch = thunkAPI.dispatch as AppDispatch

          try {
            console.log('🟢 authSlice__me__pending')
            const res = await authApi.me

            console.log('🟢 authSlice__me__fulfilled')
            dispatch(appActions.setInitialization({ isInitialized: true }))

            return { me: res as Me }
          } catch (error) {
            console.log('🟢 authSlice__me__rejected')

            return thunkAPI.rejectWithValue(null)
          }
        },
        {
          fulfilled: (state, action) => {
            state.me = action.payload.me
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

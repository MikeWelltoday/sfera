import { authApi } from '../../API/auth.api'
import { createAppSlice } from '../../tools/createAppSlice'
import { SlicesNames } from '../../tools/slicesNames'
import { LoginArgs, Me, RegisterArgs } from './authSlice.types'

export type AuthSlice = ReturnType<typeof slice.getInitialState>

const slice = createAppSlice({
  initialState: {
    isAuthenticated: false,
    me: {} as Me,
  },
  name: SlicesNames.authSlice,

  reducers: creators => {
    return {
      login: creators.asyncThunk<undefined, LoginArgs, { rejectValue: null }>(
        async (args, thunkAPI) => {
          try {
            console.log('🟣 authSlice__login__pending')
            await authApi.login(args)

            localStorage.setItem('accessToken', 'accessToken')
            localStorage.setItem('refreshToken', 'refreshToken')

            console.log('🟣 authSlice__login__fulfilled')
          } catch (error) {
            console.log('🟣 authSlice__login__rejected')

            return thunkAPI.rejectWithValue(null)
          }
        },
        {
          fulfilled: state => {
            state.isAuthenticated = true
          },
          rejected: state => {
            state.isAuthenticated = false
          },
        }
      ),

      logout: creators.reducer((state, _) => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        state.me = {} as Me
      }),

      me: creators.asyncThunk<Me, undefined, { rejectValue: null }>(
        async (_, thunkAPI) => {
          try {
            console.log('🟢 authSlice__me__pending')
            const res = await authApi.me()

            console.log('🟢 authSlice__me__fulfilled')

            return res as Me
          } catch (error) {
            console.log('🟢 authSlice__me__rejected')

            return thunkAPI.rejectWithValue(null)
          }
        },
        {
          fulfilled: (state, action) => {
            state.me = action.payload
          },
        }
      ),

      register: creators.asyncThunk<undefined, RegisterArgs, { rejectValue: null }>(
        async (args, thunkAPI) => {
          try {
            console.log('🟡 authSlice__register__pending')
            await authApi.register(args)
            console.log('🟡 authSlice__register__fulfilled')

            return
          } catch (error) {
            console.log('🟡 authSlice__register__rejected')

            return thunkAPI.rejectWithValue(null)
          }
        }
      ),

      update: creators.asyncThunk<Partial<Me>, Partial<Me>, { rejectValue: null }>(
        async (args, thunkAPI) => {
          try {
            console.log('🔵 authSlice__update__pending')
            await authApi.update(args)

            console.log('🔵 authSlice__update__fulfilled')

            return args
          } catch (error) {
            console.log('🔵 authSlice__update__rejected')

            return thunkAPI.rejectWithValue(null)
          }
        },
        {
          fulfilled: (state, action) => {
            state.me = { ...state.me, ...action.payload }
          },
        }
      ),
    }
  },

  selectors: {
    isAuthenticated: state => state.isAuthenticated,
    me: state => state.me,
  },
})

/** ⛔ SLICE, THUNKS, ACTIONS, SELECTORS иимпортировать напрямую из файла => если через index, то будет ошибка циклической зависимости */

export const authSlice = slice.reducer
export const authActions = slice.actions
export const authSelectors = slice.selectors

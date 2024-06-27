import { appActions } from '@/state/slices/app/appSlice'

import { AppDispatch } from '../../store'
import { createAppSlice } from '../../tools/createAppSlice'
import { SlicesNames } from '../../tools/slicesNames'

const slice = createAppSlice({
  initialState: {
    me: false as boolean,
  },
  name: SlicesNames.authSlice,

  reducers: creators => {
    return {
      me: creators.asyncThunk<undefined, undefined, { rejectValue: null }>(
        async (_, thunkAPI) => {
          const dispatch = thunkAPI.dispatch as AppDispatch
          const res = true

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
})

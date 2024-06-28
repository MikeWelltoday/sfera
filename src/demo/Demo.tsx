import { useSelector } from 'react-redux'

import { appSelectors } from '@/state/slices/app/appSlice'
import { authActions, authSelectors } from '@/state/slices/auth/authSlice'
import { useAppDispatch } from '@/state/store'

export const Demo = () => {
  const dispatch = useAppDispatch()
  const isInitialized = useSelector(appSelectors.isInitialized)
  const appStatus = useSelector(appSelectors.status)
  const me = useSelector(authSelectors.me)

  function loginTrue() {
    dispatch(authActions.login({ email: 'admin@yandex.ru', password: 'admin', rememberMe: false }))
  }

  function loginFalse() {
    dispatch(authActions.login({ email: 'a', password: 'a', rememberMe: false }))
  }

  function meHandler() {
    dispatch(authActions.me())
  }

  function logout() {
    dispatch(authActions.logout())
  }

  function profileChange() {
    dispatch(authActions.update({ email: '💩', name: '💩' }))
  }

  function register() {
    dispatch(authActions.register({ email: 'NEW', password: 'NEW', status: 'customer' }))
  }

  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        width: '100vw',
      }}
    >
      <ul>
        <li>isInitialized: {isInitialized.toString()}</li>
        <li>appStatus: {appStatus}</li>
        <li>
          me: {me.name} | {me.email} | {me.id}
        </li>
      </ul>
      <p>--------------------------</p>
      <br />
      <button
        onClick={loginTrue}
        style={{ background: 'gray', display: 'block', marginRight: '50px' }}
      >
        login - true
      </button>
      <button
        onClick={loginFalse}
        style={{ background: 'gray', display: 'block', marginRight: '50px' }}
      >
        login - false
      </button>
      <button
        onClick={meHandler}
        style={{ background: 'gray', display: 'block', marginRight: '50px' }}
      >
        me
      </button>
      <button
        onClick={logout}
        style={{ background: 'gray', display: 'block', marginRight: '50px' }}
      >
        logout
      </button>
      <button
        onClick={profileChange}
        style={{ background: 'gray', display: 'block', marginRight: '50px' }}
      >
        profileChange
      </button>
      <button
        onClick={register}
        style={{ background: 'gray', display: 'block', marginRight: '50px' }}
      >
        register
      </button>
    </div>
  )
}
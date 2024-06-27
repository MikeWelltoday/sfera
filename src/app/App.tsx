import { useSelector } from 'react-redux'

import { appSelectors } from '@/state/slices/app/appSlice'
import { authActions, authSelectors } from '@/state/slices/auth/authSlice'
import { useAppDispatch } from '@/state/store'

export function App() {
  const dispatch = useAppDispatch()
  const isInitialized = useSelector(appSelectors.isInitialized)
  const appStatus = useSelector(appSelectors.status)
  const me = useSelector(authSelectors.me)

  function loginTrue() {
    dispatch(authActions.login({ email: 'admin@yandex.ru', password: 'admin', rememberMe: false }))
  }

  function loginFalse() {
    dispatch(authActions.login({ email: 'admin@yandex.ru', password: 'admin', rememberMe: false }))
  }

  function meHandler() {
    dispatch(authActions.me())
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
        <li>isInitialized: {isInitialized}</li>
        <li>appStatus: {appStatus}</li>
        <li>me: {me}</li>
      </ul>
      <button onClick={loginTrue}>login - true</button>
      <button onClick={loginFalse}>login - false</button>
      <button onClick={meHandler}>me</button>
    </div>
  )
}

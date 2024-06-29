import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { appSelectors } from '@/state/slices/app/appSlice'
import { authActions } from '@/state/slices/auth/authSlice'
import { useAppDispatch } from '@/state/store'

import 'react-toastify/dist/ReactToastify.css'

import s from './Layout.module.scss'

import { InitLoader, LineLoader, PageHeader } from './_components'

export const Layout = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(authActions.me())
  }, [])

  const isInitialized = useSelector(appSelectors.isInitialized)
  const isLineLoading = useSelector(appSelectors.status)

  return (
    <div className={s.layout}>
      <PageHeader />
      {isLineLoading === 'loading' && <LineLoader />}
      <main>{isInitialized ? <Outlet /> : <InitLoader />}</main>

      <ToastContainer
        autoClose={5000}
        closeOnClick
        draggable={false}
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss={false}
        pauseOnHover
        position={'bottom-left'}
        rtl={false}
        theme={'dark'}
      />
    </div>
  )
}

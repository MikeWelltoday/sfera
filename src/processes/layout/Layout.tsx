import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import s from './Layout.module.scss'

import { PageHeader } from './components'

export const Layout = () => {
  const decider = true

  return (
    <div className={s.layout}>
      <PageHeader decider={decider} />
      <main>
        <Outlet />
      </main>
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

import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import {
  Error404,
  ForgotPasswordPage,
  MainPage,
  ProfilePage,
  SignInPage,
  SignUpPage,
} from '@/pages'
import { PATH } from '@/shared'

import { Layout } from './layout/Layout'

//========================================================================================

const publicRoutes: RouteObject[] = [
  {
    element: <SignInPage />,
    path: PATH.SIGNIN,
  },
  {
    element: <SignUpPage />,
    path: PATH.SIGNUP,
  },
  {
    element: <ForgotPasswordPage />,
    path: PATH.FORGOTPASSWORD,
  },
  {
    element: <MainPage />,
    path: PATH.MAINPAGE,
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <div>About Us</div>,
    path: PATH.ABOUTUS,
  },
  {
    element: <div>Customers Registration</div>,
    path: PATH.CUSTOMERSREGISTRATION,
  },
  {
    element: <div>Executors Registration</div>,
    path: PATH.EXECUTORSREGISTRATION,
  },
  {
    element: <div>Short Customers Inst</div>,
    path: PATH.SHORTCUSTOMERSINSTRUCTION,
  },
  {
    element: <div>Short Executors Inst</div>,
    path: PATH.SHORTEXECUTORSINSTRUCTION,
  },
  {
    element: <div>Contacts</div>,
    path: PATH.CONTACTS,
  },
  {
    element: <ProfilePage />,
    path: PATH.PROFILE,
  },
  {
    element: <div>3D - shop decisions</div>,
    path: PATH.SHOPDECISIONS,
  },
]

//========================================================================================

export const routes = createBrowserRouter([
  {
    children: [
      {
        children: privateRoutes,
        element: <PrivateRoutes />,
      },
      {
        children: publicRoutes,
        element: <PublicRoutes />,
      },

      {
        element: <Navigate replace to={PATH.MAINPAGE} />,
        path: PATH.INIT,
      },
    ],
    element: <Layout />,
    errorElement: <Error404 />,
  },
])

export function Router() {
  return <RouterProvider router={routes} />
}

//========================================================================================
const isAuthenticated = false

function PrivateRoutes() {
  return isAuthenticated ? <Outlet /> : <Navigate to={PATH.SIGNIN} />
}

function PublicRoutes() {
  return isAuthenticated ? <Navigate to={PATH.MAINPAGE} /> : <Outlet />
}

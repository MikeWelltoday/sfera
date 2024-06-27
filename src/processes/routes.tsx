import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { PATH } from '@/shared'

import { Layout } from './layout/Layout'

//========================================================================================

const publicRoutes: RouteObject[] = [
  {
    element: <div>Sign - in</div>,
    path: PATH.SIGNIN,
  },
  {
    element: <div>Sign - up</div>,
    path: PATH.SIGNUP,
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <div>Main Page</div>,
    path: PATH.MAINPAGE,
  },
  {
    element: <div>Contacts</div>,
    path: PATH.CONTACTS,
  },
  {
    element: <div>Profile Page</div>,
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
    errorElement: <div>Error 404</div>,
  },
])

export function Router() {
  return <RouterProvider router={routes} />
}

//========================================================================================
const isAuthenticated = true

function PrivateRoutes() {
  return isAuthenticated ? <Outlet /> : <Navigate to={PATH.SIGNIN} />
}

function PublicRoutes() {
  return isAuthenticated ? <Navigate to={PATH.MAINPAGE} /> : <Outlet />
}

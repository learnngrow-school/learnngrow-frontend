/* eslint-disable react-refresh/only-export-components */
import { IRoute } from '../navigation/navigation.types.ts'
import { urls } from '../navigation/app.urls.ts'
import { lazy } from 'react'

const Main = lazy(() => import('../screens/Main'))
const Courses = lazy(() => import('../screens/Courses'))
const Contacts = lazy(() => import('../screens/Contacts'))
const User = lazy(() => import('../screens/User'))
const Auth = lazy(() => import('../screens/Auth'))
const Registration = lazy(() => import('../screens/Registration'))

const appRoutes: IRoute[] = [
  {
    path: urls.main,
    element: <Main />,
  },
  {
    path: urls.courses,
    element: <Courses/>,
  },
  {
    path: urls.contacts,
    element: <Contacts/>,
  },
  {
    path: urls.user,
    element: <User/>,
  },
  {
    path: urls.auth,
    element: <Auth/>,
  },
  {
    path: urls.registration,
    element: <Registration/>,
  },
]

export default appRoutes

import { IRoute } from '../navigation/navigation.types.ts'
import { urls } from '../navigation/app.urls.ts'
import { lazy } from 'react'

const Main = lazy(() => import('../screens/Main'))

const appRoutes: IRoute[] = [
  {
    path: urls.main,
    element: <Main />,
  },
]

export default appRoutes

import { IRoute } from '../navigation/navigation.types.ts'
import { urls } from '../navigation/app.urls.ts'
import { lazy } from 'react'

const Main = lazy(() => import('../screens/Main'))
const Courses = lazy(() => import('../screens/Courses'))
const Contacts = lazy(() => import('../screens/Contacts'))
const NavSubjects = lazy(() => import('../shared/NavSubjects'))

const appRoutes: IRoute[] = [
  {
    path: urls.main,
    element: <Main />,
  },
  {
    path: urls.subjects,
    element: <NavSubjects subjects={["Матан", "Психология семейной жизни", "Плетение фенечек", "Сисанал"]}/>,
  },
  {
    path: urls.courses,
    element: <Courses/>,
  },
  {
    path: urls.contacts,
    element: <Contacts/>,
  }
]

export default appRoutes

/* eslint-disable react-refresh/only-export-components */
import { IRoute } from '../navigation/navigation.types.ts'
import { urls } from '../navigation/app.urls.ts'
import { lazy } from 'react'

const Main = lazy(() => import('../screens/Main'))
const Courses = lazy(() => import('../screens/Courses'))
const Contacts = lazy(() => import('../screens/Contacts'))
const MyData = lazy(() => import('../screens/PersonalAccount/MyData/index.tsx'))
const Auth = lazy(() => import('../screens/Auth'))
const Registration = lazy(() => import('../screens/Registration'))
const MainPersonal = lazy(() => import('../screens/PersonalAccount/Main/index.tsx'))
const Schedule = lazy(() => import('../screens/PersonalAccount/Schedule/index.tsx'))
const News = lazy(() => import('../screens/PersonalAccount/NewsPromos/index.tsx'))
const Homework = lazy(() => import('../screens/PersonalAccount/Homework/index.tsx'))
const CreateHomework = lazy(() => import('../screens/PersonalAccount/Homework/components/CreateHomework/index.tsx'))

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
    path: urls.myData,
    element: <MyData/>,
  },
  {
    path: urls.auth,
    element: <Auth/>,
  },
  {
    path: urls.registration,
    element: <Registration/>,
  },
  {
    path: urls.mainPersonal,
    element: <MainPersonal/>,
  },
  {
    path: urls.schedule,
    element: <Schedule/>,
  },
  {
    path: urls.news,
    element: <News/>,
  },
  {
    path: urls.homework,
    element: <Homework/>,
  },
  {
    path: urls.createHomework,
    element: <CreateHomework/>
  }
]

export default appRoutes

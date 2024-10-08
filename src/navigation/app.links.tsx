import { ILink } from './navigation.types.ts'
import { urls } from './app.urls.ts'

export const appLinks: ILink[] = [
  {
    path: urls.main,
    name: 'Learn & Grow',
    //icon
  },
  {
    path: urls.subjects,
    name: 'Предметы',
    //icon
  },
  {
    path: urls.courses,
    name: 'Курсы',
    //icon
  },
  {
    path: urls.contacts,
    name: 'Контакты',
    //icon
  },
]

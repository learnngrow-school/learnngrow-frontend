import { ILink } from './navigation.types.ts'
import { urls } from './app.urls.ts'

export const appLinks: ILink[] = [
  {
    path: urls.main,
    name: 'Learn & Grow',
  },
  {
    path: urls.subjects,
    name: 'Предметы',
  },
  {
    path: urls.courses,
    name: 'Курсы',
  },
  {
    path: urls.contacts,
    name: 'Контакты',
  },
  {
    path: urls.user,
    name: 'Личный кабинет',
  },
  {
    path: urls.auth,
    name: 'Вход',
  },
  {
    path: urls.registration,
    name: 'Регистрация',
  },
]

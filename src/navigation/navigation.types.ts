export interface IRoute {
  path: string
  element: JSX.Element
}

export interface ILink {
  path: string
  name: string
  icon?: JSX.Element
}

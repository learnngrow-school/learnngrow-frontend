import '../../../shared/Layout/layout.css'
import { ILink } from '../../../navigation/navigation.types.ts'
import { matchRoutes, NavLink, useLocation } from 'react-router-dom'
import appRoutes from '../../../navigation/app.routes.tsx'
import NavSubjects from '../../NavSubjects/index.tsx'

interface IProps {
  link: ILink
}

const NavigationLink = (props: IProps) => {
  const currentLocation = useLocation()
  const currentRoutesMatch = matchRoutes(appRoutes, currentLocation)
  let currentPath
  if (currentRoutesMatch) {
    currentPath = currentRoutesMatch[currentRoutesMatch.length - 1]?.route?.path
  }

  //const isActive = currentPath?.includes(props.link.path)

  // const linkClassName = cn({
  //   [styles.navLink]: true,
  //   [styles.active]: isActive,
  // })
 if (props.link.name == "Предметы") {
   return (
     <NavSubjects subjects={["Матан", "Психология семейной жизни", "Плетение фенечек", "Сисанал"]}/>
   )
 }

  return (
    <NavLink
      className="navlink"
      to={props.link.path}
    >
      {props.link?.icon} {props.link.name}
    </NavLink>
  )
}

export default NavigationLink

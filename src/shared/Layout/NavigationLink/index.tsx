import '../../../shared/Layout/layout.css'
import { ILink } from '../../../navigation/navigation.types.ts'
import { matchRoutes, NavLink, useLocation } from 'react-router-dom'
import appRoutes from '../../../navigation/app.routes.tsx'
import { useNavigate } from 'react-router-dom'
import '../../../styles/text.css'

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

  const navigate = useNavigate()

  //const isActive = currentPath?.includes(props.link.path)

  // const linkClassName = cn({
  //   [styles.navLink]: true,
  //   [styles.active]: isActive,
  // })

  return (
    <div className='navlinkContainer' key={props.link.name} onClick={ () => navigate(props.link.path)}>
      <NavLink
      className="navlink text--body-s"
      to={props.link.path}
      >
      {props.link?.icon} {props.link.name}
      </NavLink>
    </div>
    
  )
}

export default NavigationLink

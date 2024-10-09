import '../../layout.css'
import { ILink } from '../../../../navigation/navigation.types.ts'
import { matchRoutes, NavLink, useLocation } from 'react-router-dom'
import appRoutes from '../../../../navigation/app.routes.tsx'
import './navigationLink.css'
import { useNavigate } from 'react-router-dom'
import '../../../../styles/text.css'

interface IProps {
  link: ILink,
  onClick: () => void
}

const NavigationLink = (props: IProps) => {
  const currentLocation = useLocation()
  const currentRoutesMatch = matchRoutes(appRoutes, currentLocation)
  let currentPath
  if (currentRoutesMatch) {
    currentPath = currentRoutesMatch[currentRoutesMatch.length - 1]?.route?.path
  }

  const isActive = currentPath?.includes(props.link.path)

  return (
    <div className={'navlinkContainer' + (isActive ? ' navlinkContainerActive' : '')} 
      key={props.link.name} onClick={ () => props.onClick()}>  
      <NavLink
        className={"navlink text--body-m text-400" + (isActive ? ' navlinkActive' : '')}
        to={props.link.path}>
        {props.link?.icon} {props.link.name}
      </NavLink>
    </div>
  )
}

export default NavigationLink

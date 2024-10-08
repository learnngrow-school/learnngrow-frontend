import '../layout.css'
import NavigationLink from '../NavigationLink'
import { appLinks } from '../../../navigation/app.links'
import { useNavigate } from 'react-router-dom'
import { urls } from '../../../navigation/app.urls'
import NavSubjects from '../../NavSubjects'
import DarkLogo from '/src/assets/icons/darkLogo.svg'
import '../../../styles/text.css'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div className="navbar">
      <div className="logoBlock" onClick={() => navigate(urls.main)}>
        <img src={DarkLogo} alt="logo " className='logoImg'/>
        <div className='text--body-s'>Learn & Grow</div>
      </div>
      <div className='navLinksBlock'>
        <NavSubjects subjects={["Матан", "Психология семейной жизни", "Плетение фенечек", "Сисанал"]}/>
        <NavigationLink key={appLinks[2].name} link={appLinks[2]} />
        <NavigationLink key={appLinks[3].name} link={appLinks[3]} />
      </div>
    </div>
  )
}

export default Navbar

import '../layout.css'
import NavigationLink from '../NavigationLink'
import { appLinks } from '../../../navigation/app.links'

const Navbar = () => {
  return (
    <div className="navbar">
      {appLinks.map((link : any) => (
        <NavigationLink key={link.path} link={link} />
      ))}
    </div>
  )
}

export default Navbar

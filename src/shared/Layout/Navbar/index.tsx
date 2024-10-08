import styles from '../layout.module.css'
import { NavLink } from 'react-router-dom'
import { appLinks } from '../../../navigation/app.links'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      {appLinks.map((link : any) => (
        <NavLink key={link.path} to={link} />
      ))}
    </div>
  )
}

export default Navbar

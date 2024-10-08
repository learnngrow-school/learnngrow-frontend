import { Outlet } from 'react-router-dom'
import styles from './layout.module.css'
import Navbar from './Navbar'
//import DarkLogo from '../../assets/icons/dark-logo.svg'


const Layout = () => {

  return (
      <div >
        <div className={styles.top}>
          {/*<DarkLogo/>*/}
          <Navbar/>
        </div>
        <div className={styles.pageContent}>
            <Outlet />
        </div>
      </div>
  )
}

export default Layout

import { Outlet } from 'react-router-dom'
import './layout.css'
import Navbar from './Navbar'
//import DarkLogo from '../../assets/icons/dark-logo.svg'
import { Suspense } from 'react'


const Layout = () => {

  return (
      <div >
        <div className="top">
          {/*<DarkLogo/>*/}
          <Navbar/>
        </div>
        <div className="pageContent">
          <Suspense fallback={<div>Загрузка...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </div>
  )
}

export default Layout

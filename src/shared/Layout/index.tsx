import { Outlet } from 'react-router-dom'
import './layout.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { Suspense } from 'react'

interface ILayoutProps {
  children?: React.ReactNode
}

const Layout = ({ children }: ILayoutProps = {}) => {

  return (
      <>
      <div className="main">
        <div className="top">
          <Navbar/>
        </div>
        <div className="pageContent">
          <Suspense fallback={<div>Загрузка...</div>}>
            <Outlet context={children}/>
          </Suspense>
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </div>
      </>
  )
}

export default Layout

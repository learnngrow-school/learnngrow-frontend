import { Outlet } from 'react-router-dom'
import './layout.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { Suspense } from 'react'
import useWindowSize from '../../screens/Courses/components/WindowSize/useWindowSize'
import NavButton from './NavButton'

interface ILayoutProps {
  children?: React.ReactNode
}

const Layout = ({ children }: ILayoutProps = {}) => {
  const { width } = useWindowSize();

  return (
      <>
      <div className="main">
        <div className="top">
          {width <= 767 ? (
            <>
                <NavButton/>
            </>
            ) : (
                <Navbar/>
            )}
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

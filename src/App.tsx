import { useEffect } from 'react'
import appRouter from './navigation/app.router.tsx'
import { urls } from './navigation/app.urls'
import {RouterProvider} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  useEffect(() => {
    if(location.pathname == "/") {
      location.replace(urls.main)
    }
  })

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App

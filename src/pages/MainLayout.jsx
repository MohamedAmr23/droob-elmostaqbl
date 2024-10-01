import  { Fragment } from 'react'
import NavBar from '../components/NavBar.jsx'
import { Outlet } from 'react-router-dom'
const MainLayout = () => {
  return (
      <Fragment>
        <NavBar/>
        <Outlet/>
    </Fragment>
  )
}

export default MainLayout
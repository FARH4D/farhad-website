import { Outlet } from 'react-router-dom'
import NavMenu from '../NavMenu'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <NavMenu />
      <div className="page">
        <Outlet />

      </div>
    </div>
  )
}

export default Layout
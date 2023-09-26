import { Link } from 'react-router-dom'
import './index.scss'
import Logo from '../../assets/images/Farhad-dev-logos_white.png'

const NavMenu = () => (
    <div className="nav-bar">
        <h1>hello</h1>
        <Link className = "logo" to = '/' >
            <img src = {Logo}/>
        </Link>

    </div>

)

export default NavMenu
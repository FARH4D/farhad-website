import { Link } from 'react-router-dom';
import './index.scss';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillHome } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsFillFilePersonFill } from 'react-icons/bs'
import { RiComputerFill } from 'react-icons/ri'

const NavMenu = () => (
  <div className="nav-bar">
    <div className="nav-links">
      <Link to="/"> <AiFillHome style={{ fontSize: '25px' }} /> Home</Link>
      <Link to="/about"> <BsFillFilePersonFill style={{ fontSize: '25px' }} /> About</Link>
      <Link to="/projects"> <RiComputerFill style={{ fontSize: '25px' }} /> Projects</Link>
      <a href="https://www.linkedin.com/in/farhad-ahmed-8a1a30227/" target="_blank" rel="noopener noreferrer"> <AiFillLinkedin style={{ fontSize: '25px' }} /> LinkedIn</a>
      <a href="https://github.com/FARH4D" target="_blank" rel="noopener noreferrer"><AiFillGithub style={{ fontSize: '30px' }} />Github</a>
    </div>
    <Link className="logo" to="/">
      {/* <img src={Logo}/> */}
    </Link>
  </div>
);

export default NavMenu;

import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillHome } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsFillFilePersonFill } from 'react-icons/bs'
import { RiComputerFill } from 'react-icons/ri'

const NavMenu = () => (
  <div className="nav-bar">
    <div className="nav-links">
      <NavLink exact = "true" activeclassname = "active" to = "/"> <AiFillHome style={{ fontSize: '35px' }} /> </NavLink>
      <NavLink exact = "true" activeclassname = "active" className="about" to="/about"> <BsFillFilePersonFill style={{ fontSize: '35px' }} /></NavLink>
      <NavLink exact = "true" activeclassname = "active" className="projects" to="/projects"> <RiComputerFill style={{ fontSize: '35px' }} /> </NavLink>
      <a href="https://www.linkedin.com/in/farhad-ahmed-8a1a30227/" target="_blank" activeclassname = "active" className="linkedIn"> <AiFillLinkedin style={{ fontSize: '35px' }} /> </a>
      <a href="https://github.com/FARH4D" target="_blank" activeclassname = "active" className="github"><AiFillGithub style={{ fontSize: '40px' }} /></a>
    </div>

  </div>
);

export default NavMenu;

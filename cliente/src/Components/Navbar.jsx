import {useState} from 'react'
import {Link, NavLink, useLocation} from 'react-router-dom'
import {links} from '../data'
import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'
import './navbar.css'
import Logo from '../Img/Logo/Logo.png'

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  const location = useLocation();
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className='logo' 
          onClick={
            () => setIsNavShowing(false)
          }
        >
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul className={
          `nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`
        }>
          {
            links.map(({name, path}, index) => {
              return (
                <li key={index}>
                  <NavLink to={path}
                    className={
                      ({isActive}) => isActive && 
                      (location.pathname.length > 8 ?
                        location.pathname.substring(0,8) : location.pathname) === path ?
                          'active-nav' : ''
                    }
                    onClick={
                      () => setIsNavShowing(prev => !prev)
                    }
                  >
                    {name}
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
        <button className="nav__toggle-btn" 
          onClick={
            () => setIsNavShowing(prev => !prev)
          }
        >
          {isNavShowing ?  <MdOutlineClose /> : <GoThreeBars />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar

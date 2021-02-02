import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-long.png';

const Nav = () => {
  return (
    <>
      <nav>
        <Link to='/' className='logo-link'>
          <img src={logo} alt='secret family recipes cookbook'/>
        </Link>
        <div className='links'>
          {/* add later -- if logged in, log out button & route, else log-in button and route*/}
          <Link to='/login'>Login</Link>
        </div>
      </nav>
    </>
  )
}

export default Nav
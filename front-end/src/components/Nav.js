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
          <Link to='/my-recipes'>Dashboard</Link>
          <Link to='/recipes'>Recipes</Link>
          <Link to='/login'>Login</Link>
          <Link to='/new-user'>Sign Up</Link>
        </div>
      </nav>
    </>
  )
}

export default Nav
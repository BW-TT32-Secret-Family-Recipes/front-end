import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import logo from '../assets/images/logo-long.png';

const Nav = ({currentUser}) => {
  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('currentUserId')
    window.location.href='/'
  }

  if(localStorage.getItem('token')) {
    const id = localStorage.getItem('currentUserId')
    return (
      <>
        <nav>
          <Link to={`/${id}`} className='logo-link'>
            <img src={logo} alt='secret family recipes cookbook'/>
          </Link>
          <div className='links'>
            {/* add later -- if logged in, log out button & route, else log-in button and route*/}
            <Link to={`/${id}/home`}>Home</Link>
            <Link to={`/${id}/recipes`}>My Recipes</Link>
            <Link to={`/${id}/add-recipe`}>Add New Recipe</Link>
            <Link onClick={logout}>Logout</Link>
          </div>
        </nav>
      </>
    )
  } else {
    return (
      <>
        <nav>
          <Link to='/' className='logo-link'>
            <img src={logo} alt='secret family recipes cookbook'/>
          </Link>
          <div className='links'>
            {/* add later -- if logged in, log out button & route, else log-in button and route*/}
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/new-user'>Sign Up</Link>
          </div>
        </nav>
      </>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Nav)
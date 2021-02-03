import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {logout } from '../actions/index'
import logo from '../assets/images/logo-long.png';

const Nav = ({logout, userId }) => {
  const [id, setId] = useState(null)
  
  useEffect(()=> {
    const currentUserId = localStorage.getItem('currentUserId')
    if(currentUserId) {
      setId(currentUserId)
    } else {
      setId(userId)
    }
  }, [userId])
  
  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('currentUserId')
    logout()
    window.location.href='/'
  }

  if(localStorage.getItem('token')) {
    return (
      <>
        <nav>
          <Link to={`/`} className='logo-link'>
            <img src={logo} alt='secret family recipes cookbook'/>
          </Link>
          <div className='links'>
            {/* add later -- if logged in, log out button & route, else log-in button and route*/}
            <Link to={`/`}>Home</Link>
            <Link to={`/${id}/recipes`}>My Recipes</Link>
            <Link to={`/${id}/add-recipe`}>Add New Recipe</Link>
            <Link onClick={handleLogout}>Logout</Link>
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
    userId: state.currentUserId
  }
}

export default connect(mapStateToProps, {logout})(Nav)
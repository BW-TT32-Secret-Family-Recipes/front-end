import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <nav>
        <h1><span id='title'>Recipe</span> World</h1>

        <Link to='/'>Home</Link>
        <Link to='/recipes'>Recipes</Link>
        <Link to='/login'>Login</Link>
        <Link to='/new-user'>Sign Up</Link>
      </nav>
    </>
  )
}

export default Nav
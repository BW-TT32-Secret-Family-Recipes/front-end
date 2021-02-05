import React from 'react'
import { Link } from 'react-router-dom';

const OnSuccess = () => {
  return (
    <div className='success'>

      <div className='success-box'>

        <div className='check'>
          <i className="fas fa-check"></i>
        </div>

        <h2>Success!</h2>
        <p>Your account has been successfully created, thanks!</p>
        <Link to='/login'>Log in</Link>
      </div>

    </div>
  )
}

export default OnSuccess

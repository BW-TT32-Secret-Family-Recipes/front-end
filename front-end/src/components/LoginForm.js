//Login form component
import React, { useState } from 'react';
import {connect} from 'react-redux'
import {login} from '../actions/'
import axios from 'axios'

const LoginForm = (props) => {

  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('https://bw-tt32-secret-family-recipes.herokuapp.com/api/auth/login', formData)
      .then(res => {
        console.log(`Success, token is ${res.data.token}`)

        // Place in state, redux, or localStorage?
        // Do we want to set a timeout for token?

        localStorage.setItem('token', res.data.token)
        // props.history.push('/')
        axios
          .get('https://bw-tt32-secret-family-recipes.herokuapp.com/api/users')
            .then(res=> {
              console.log(res)
              const user = res.data.filter(user => {
                return user.username === formData.username
              })
              console.log(user)
              localStorage.setItem('currentUserId', user[0].id)
              props.login()
              props.history.push(`/${user[0].id}/home`)
            })
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <form className='addForm smallForm' onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label className='formItem' key='1'>
        Username
                <input required type='text' name='username' value={formData.value} onChange={handleChange} />
      </label>
      <label className='formItem' key='2'>
        Password
                <input required type='password' name='password' value={formData.value} onChange={handleChange} />
      </label>
      <div className='formItem' key='3'>
        <button>Log In</button>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, {login})(LoginForm)
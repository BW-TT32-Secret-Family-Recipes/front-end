//Component for new user signup
import React, { useState } from 'react';
import axios from 'axios'

const initialFormData = {
  username: '',
  password: ''
}

const NewUserForm = (props) => {

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('https://bw-tt32-secret-family-recipes.herokuapp.com/api/auth/register', formData)
      .then(res => {
        setFormData(initialFormData)
        props.history.push('/success')
      })
      .catch(err => {
        console.log(err)
      })
  };

  return (
    <form className='addForm smallForm' onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <label key='1' className='formItem'>
        Username
                <input required type='text' name='username' value={formData.value} onChange={handleChange} />
      </label>
      <label key='2' className='formItem'>
        Password
                <input required minLength='8' type='password' name='password' value={formData.value} onChange={handleChange} />
      </label>
      <div className='formItem' key='3'>
        <button>Register</button>
      </div>
    </form>
  );
};

export default NewUserForm;
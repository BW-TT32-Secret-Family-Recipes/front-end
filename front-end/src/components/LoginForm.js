//Login form component
import React, { useState } from 'react';

const LoginForm = (props) => {

    const [formData, setFormData] = useState({username:'', password:''});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('success');
    }

    return(
        <form className='addForm smallForm' onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label className='formItem' key='1'>
                Username
                <input required type='text' name='username' value={formData.value} onChange={handleChange}/>
            </label>
            <label className='formItem' key='2'>
                Password
                <input required type='password' name='password' value={formData.value} onChange={handleChange}/>
            </label>
            <div className='formItem' key='3'>
                <button>Log In</button>
            </div>
        </form>
    );
};

export default LoginForm;
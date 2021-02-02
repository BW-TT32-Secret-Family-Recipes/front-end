//Component for new user signup
import React, { useState } from 'react';

const NewUserForm = (props) => {

    const [formData, setFormData] = useState({username:'', password:''});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('success');
    };

    return(
        <form className='addForm smallForm' onSubmit={handleSubmit}>
            <h2>Signup</h2>
            <label key='1' className='formItem'>
                Username
                <input required type='text' name='username' value={formData.value} onChange={handleChange} />
            </label>
            <label key='2' className='formItem'>
                Password
                <input required type='password' name='password' value={formData.value} onChange={handleChange} />
            </label>
            <div className='formItem' key='3'>
                <button>Register</button>
            </div>
        </form>
    );
};

export default NewUserForm;
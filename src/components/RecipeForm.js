//Form for adding/editing recipes
import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth'

const initialFormData = {
    title: '',
    category: '',
    source: '',
    ingredients: '',
    instructions: ''
}

const RecipeForm = (props) => {

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (event) => {
        const id = localStorage.getItem('currentUserId')
        event.preventDefault();
        axiosWithAuth().post(`/users/${id}/recipes`, formData)
            .then(res=> {
                setFormData(initialFormData)
                props.history.push(`/${id}/recipes`)
            })
            .catch(err=> {
                console.log(err)
            })
    }

    return(
        <form className='addForm' onSubmit={handleSubmit}>
            <h2>Add Recipe</h2>
            <label className='formItem' key='1'>
                Title
                <input required type='text' name='title' value={formData.title} onChange={handleChange}/>
            </label>
            <label className='formItem' key='2'>
                Source
                <input required type='text' name='source' value={formData.source} onChange={handleChange} placeholder='Grandma, Google, etc'/>
            </label>
            <label className='formItem' key='3'>
                Ingredients
                <textarea required maxLength='128' name='ingredients' value={formData.ingredients} onChange={handleChange}/>
            </label>
            <label className='formItem' key='4'>
                Instructions
                <textarea required maxLength='1000' name='instructions' value={formData.instructions} onChange={handleChange}/>
            </label>
            <label className='formItem' key='5'>
                Category
                <input 
                    type='text'
                    name='category'
                    value={formData.category}
                    onChange={handleChange}
                    placeholder='Breakfast, Snack, Dessert, etc'
                />
            </label>
            <div className='formItem' key='6'>
                <button>Submit Recipe</button>
            </div>
        </form>
    );
};



export default RecipeForm
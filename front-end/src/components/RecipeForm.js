//Form for adding/editing recipes
import React, { useState } from 'react';

const RecipeForm = (props) => {

    const { categories } = props;
    const [formData, setFormData] = useState({title:'', category: '', source:'', ingredients:'', instructions:''});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('success');
    }

    return(
        <form className='addForm' onSubmit={handleSubmit}>
            <h2>Add/Edit Recipe</h2>
            <label className='formItem' key='1'>
                Title
                <input required type='text' name='title' value={formData.title} onChange={handleChange}/>
            </label>
            <label className='formItem' key='2'>
                Source
                <input required type='text' name='source' value={formData.source} onChange={handleChange}/>
            </label>
            <label className='formItem' key='3'>
                Ingredients
                <textarea required name='ingredients' value={formData.ingredients} onChange={handleChange}/>
            </label>
            <label className='formItem' key='4'>
                Instructions
                <textarea required name='instructions' value={formData.instructions} onChange={handleChange}/>
            </label>
            <label className='formItem' key='5'>
                Category
                <select required name='category' onChange={handleChange}>
                    <option value=''>--select one--</option>
                    {categories.map(category => <option value={category}>{category}</option>)}
            </select>
            </label>
            <div className='formItem' key='6'>
                <button>Submit</button>
            </div>
        </form>
    );
};

export default RecipeForm;
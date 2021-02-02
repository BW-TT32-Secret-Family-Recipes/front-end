/* eslint-disable no-unused-vars */
//Form for adding/editing recipes
import React, { useState } from 'react';
import styled from 'styled-components'

const StyledForm = styled.form`
display: flex;
flex-flow: row wrap;
width: 700px;
max-width: 90%;
border: 10px solid #F2A22C;
border-radius: 8px;
margin: 20vh auto;
align-items: flex-start;
background-color: #3a3a3a;
color: white;
justify-content: space-evenly;

.formItem {
    margin: 10px;
    display: flex;
    width: 310px;
    flex-flow: column nowrap;
    align-items: flex-start;
    //border: 2px solid yellow;
    font-family: sans-serif;
    padding: 10px;
}

h2 {
    width: 100%;
    margin: 24px;
    text-align: center;
    font-size: 24px;
}

input, select, textarea {
    margin-top: 10px;
    width: 100%;
    border-radius: 5px;
}

textarea {
    height: 150px;
}

select {
    align-self: flex-start;
}

button {
    margin: 9px 0;
    width: 75%;
    align-self: center;
    font-size: 18px;
    border-radius: 7px;
}

button:hover {
    background-color: #F2A22C;
    color: white;
}

`;

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
        <StyledForm onSubmit={handleSubmit}>
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
        </StyledForm>
    );
};

export default RecipeForm;
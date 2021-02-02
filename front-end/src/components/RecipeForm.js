/* eslint-disable no-unused-vars */
//Form for adding/editing recipes
import React, { useState } from 'react';
import styled from 'styled-components'

const StyledForm = styled.form`
display: flex;
flex-flow: column nowrap;
width: 500px;
border: 10px solid black;
margin: 20vh auto;
align-items: center;

.formItem {
    margin: 10px 2px;
    display: flex;
    width: 300px;
    text-align: left;
    justify-content: flex-start;
}

`;

const RecipeForm = (props) => {

    const [formData, setFormData] = useState({title:'test', category:'--select one--', source:'', ingredients:'', instructions:''});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({...formData, [name]: value});
    };

    return(
        <StyledForm>
            <h3 className='formItem'>Add/Edit Recipe</h3>
            <label className='formItem'>
                Title
                <input type='text' name='title' value={formData.title} onChange={handleChange}/>
            </label>
            <label className='formItem'>
                Source
                <input type='text' name='source' value={formData.source} onChange={handleChange}/>
            </label>
            <label className='formItem'>
                Ingredients
                <input type='text' name='ingredients' value={formData.ingredients} onChange={handleChange}/>
            </label>
            <label className='formItem'>
                Instructions
                <input type='text' name='instructions' value={formData.instructions} onChange={handleChange}/>
            </label>
            <label className='formItem'>
                Category
                <select name='category' value={formData.category} onChange={handleChange}>
                    <option>--select one--</option>
                    <option>Breakfast</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                    <option>Dessert</option>
                    <option>Snacks</option>
            </select>
            </label>
        </StyledForm>
    );
};

export default RecipeForm;
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux';

function SharedRecipe(props) {
  const [recipe, setRecipe] = useState({});

  // const {  } = props;

  const recipeId = useParams().recipeId;
  const loggedIn = localStorage.getItem('token');

  useEffect(() => {
    axios.get(`https://bw-tt32-secret-family-recipes.herokuapp.com/api/recipes/${recipeId}`)
      .then(res => {
        setRecipe(res.data)
      })
      .catch(err => {
        console.log('Houston, we have a problem', err)
      })
  }, [recipeId])

  return (
    <div className='SharedRecipe'>
      <div className='container'>
        <h1>Recipe Details</h1>
        <h3>Shared by <span>{recipe.username}</span></h3>
        <div className='recipeCard'>
          <h2>{recipe.title}</h2>
          <p><span>Category:</span> {recipe.category_name}</p>
          <p><span>Source:</span> {recipe.source_name}</p>
          <p><span>Ingredients:</span> {recipe.ingredients}</p>
          <p><span>Instructions:</span> {recipe.instructions}</p>
        </div>
        {loggedIn
        ? <div className='cta'>
            Like this recipe?
            <div className='cta-btn'>Add to your cookbook</div>
          </div>
        : <div className='cta'>
          Start your own online cookbook today! 
          <div className='cta-btn'>Sign up</div>
        </div>
        
        }

    </div>
    </div>
  )
}

export default connect(null)(SharedRecipe);
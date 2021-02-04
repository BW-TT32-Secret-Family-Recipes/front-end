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
      <h1>Recipe Details</h1>
      <h3>Shared by {recipe.username}</h3>
      <div className='recipeCard'>
        <h2>{recipe.title}</h2>
        <p>Category: {recipe.category_name}</p>
        <p>Source: {recipe.source_name}</p>
        <p>Ingredients: {recipe.ingredients}</p>
        <p>Instructions: {recipe.instructions}</p>
      </div>
      {loggedIn
      ? <div>
          Like this recipe?
          <button>Add to your cookbook</button>
        </div>
      : <div>
        Start your own online cookbook today! 
        <button>Sign up</button>
      </div>
      }

    </div>
  )
}

export default connect(null)(SharedRecipe);
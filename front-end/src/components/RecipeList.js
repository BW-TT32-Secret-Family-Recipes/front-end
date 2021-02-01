import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Need to create a <Recipe /> component
// Need to map through the data and render a <Recipe /> component for each recipe
// Need to style recipe

const RecipeList = () => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    axios
      .get('https://bw-tt32-secret-family-recipes.herokuapp.com/api/recipes')
      .then(res => {
        setRecipes(res.data)
        console.log(res.data)
      })
      .catch(err => {
        console.log('NO BUENO, ABORT MISSION')
        console.log(err)
      })
  }, [])


  return (
    <div className='recipe-list'>
      <h2>Recipes</h2>

      <ul>
        {recipes.map(recipe => {
          return (
            <li key={recipe.id}>
              <strong>Title: </strong>{recipe.title}
            </li>
          )
        })}
      </ul>

    </div>
  )
}

export default RecipeList

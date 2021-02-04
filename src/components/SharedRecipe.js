import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function SharedRecipe() {
  const [recipe, setRecipe] = useState({});

  const recipeId = useParams().recipeId;

  useEffect(() => {
    axios.get(`https://bw-tt32-secret-family-recipes.herokuapp.com/api/recipes/${recipeId}`)
      .then(res => {
        console.log(res)
        setRecipe(res.data)
      })
      .catch(err => {
        console.log('Houston, we have a problem', err)
      })
  }, [recipeId])

  return (
    <div>
      <h1>Hi, I am recipe {recipeId}</h1>
      <h3>{recipe.title}</h3>
      <p>Category: {recipe.category_name}</p>
      <p>Source: {recipe.source_name}</p>
      <p>Ingredients: {recipe.ingredients}</p>
      <p>Instructions: {recipe.instructions}</p>
    </div>
  )
}

//grab the recipe id from the url DONE

//call axios(not with auth) and get the recipe info DONE

//display recipe info on the page DONE

//have an explicit link to register or login, since this was a shared recipe
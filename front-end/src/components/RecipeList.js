import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import Recipe from './Recipe'
// import recipeData from '../data/recipeData'
import Search from './Search';
import axiosWithAuth from '../utils/axiosWithAuth'
import { Link } from 'react-router-dom';

const RecipeList = (props) => {
  const [recipes, setRecipes] = useState([])
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [refresh, setRefresh] = useState([])

  const userId = localStorage.getItem('currentUserId')
  useEffect(() => {
    axios
      .get(`https://bw-tt32-secret-family-recipes.herokuapp.com/api/users/${userId}/recipes/${userId}`)
      .then(res => {
        let newArr = [];
        Array.isArray(res.data)
          ? newArr = res.data
          : newArr = [res.data]
        setRecipes(newArr);
        setFilteredRecipes(newArr);
        // console.log(res.data)
      })
      .catch(err => {
        console.log('NO BUENO, ABORT MISSION')
        console.log(err)
      })
  }, [refresh, userId])

  const routeToEdit = (recipe) => {
    props.history.push(`/${userId}/recipes/${recipe.id}/edit-recipe`)
  }

  const deleteRecipe = (recipe) => {
    axiosWithAuth().delete(`/users/${userId}/recipes/${recipe.id}`)
      .then(res=> {
        console.log(res)
        setRefresh([])
      })
      .catch(err=> {
        console.log(err)
      })
  }

  return (
    <div className='recipe-container'>
      <h2>Recipes</h2>
      <Search
        recipes={recipes}
        setFilteredRecipes={setFilteredRecipes}
      />
      <ul>
        {filteredRecipes.map(recipe => {
          return (
            <div className='recipe' key={recipe.id}>
              <button onClick={()=> {
                routeToEdit(recipe)
              }}>  Edit Recipe</button>
              <button onClick={()=> {
                deleteRecipe(recipe)
              }}>Delete Recipe</button>
              <li key={recipe.id}>
                <h4><strong>{recipe.title}</strong></h4>
                <strong>Directions: </strong>{recipe.instructions}
              </li>
            </div>
          )
        })}
      </ul>
      {
        filteredRecipes.length === 0 && recipes.length > 0
          ? <div>No results. Reset your filters to see some delicious recipes!</div>
          : ''
      }
      {
        filteredRecipes.length === 0 && recipes.length === 0
        ? <div><Link to={`/${userId}/add-recipe`}>Add some recipes!</Link></div>
        : ''
      }
    </div>
  )
}

export default RecipeList

import React, { useState, useEffect } from 'react'
// import Recipe from './Recipe'
// import recipeData from '../data/recipeData'
import Search from './Search';
import axiosWithAuth from '../utils/axiosWithAuth'
import { Link } from 'react-router-dom';

const RecipeList = (props) => {
  const [recipes, setRecipes] = useState([])
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [refresh, setRefresh] = useState([])
  const [isFetching, setIsFetching] = useState(false);

  const userId = localStorage.getItem('currentUserId')
  useEffect(() => {
    setIsFetching(true);
    axiosWithAuth()
      .get(`https://bw-tt32-secret-family-recipes.herokuapp.com/api/users/${userId}/recipes`)
      .then(res => {
        let newArr = [];
        Array.isArray(res.data)
          ? newArr = res.data
          : newArr = [res.data]
        setRecipes(newArr);
        setFilteredRecipes(newArr);
        setIsFetching(false);
      })
      .catch(err => {
        console.log('NO BUENO, ABORT MISSION')
        console.log(err);
        setIsFetching(false);
      })
  }, [refresh, userId])

  const routeToEdit = (recipe) => {
    props.history.push(`/${userId}/recipes/${recipe.id}/edit-recipe`)
  }

  const deleteRecipe = (recipe) => {
    axiosWithAuth().delete(`/users/${userId}/recipes/${recipe.id}`)
      .then(res => {
        // console.log(res)
        setRefresh([])
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className='recipe-container'>
      <h2>Recipes</h2>
      <Search
        recipes={recipes}
        filteredRecipes={filteredRecipes}
        setFilteredRecipes={setFilteredRecipes}
      />

      <div className='card'>
        <ul>
          {filteredRecipes.map(recipe => {
            return (
              <div className='recipe' key={recipe.id}>
                <div className='card-button'>
                  <button onClick={() => {
                    routeToEdit(recipe)
                  }}>  Edit Recipe</button>
                  <button onClick={() => {
                    deleteRecipe(recipe)
                  }}>Delete Recipe</button>
                </div>
                <li key={recipe.id}>
                  <h4><strong>{recipe.title}</strong></h4>

                  <strong>Directions: </strong>{recipe.instructions}

                  <br /><br /><strong>Ingredients: </strong>{recipe.ingredients}
                </li>
              </div>
            )
          })}
        </ul>
      </div>

      {
        filteredRecipes.length === 0 && recipes.length > 0
          ? <div>No results. Reset your filters to see some delicious recipes!</div>
          : ''
      }
      {
        filteredRecipes.length === 0 && recipes.length === 0 && !isFetching
          ? <div><Link to={`/${userId}/add-recipe`}>Add some recipes!</Link></div>
          : ''
      }
      {
        isFetching === true
          ? <div>Loading...</div>
          : ''
      }
    </div>
  )
}

export default RecipeList

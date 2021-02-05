import React, { useState, useEffect } from 'react'
// import Recipe from './Recipe'
// import recipeData from '../data/recipeData'
import Search from './Search';
import axiosWithAuth from '../utils/axiosWithAuth'
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const RecipeList = (props) => {
  const [recipes, setRecipes] = useState([])
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [refresh, setRefresh] = useState([])
  const [isFetching, setIsFetching] = useState(false);
  const [copyMessage, setCopyMessage] = useState({status: false, recipe_id: ''})

  const userId = localStorage.getItem('currentUserId')
  const baseUrl = window.location.origin;

  useEffect(() => {
    setIsFetching(true);
    axiosWithAuth()
      .get(`https://bw-tt32-secret-family-recipes.herokuapp.com/api/users/${userId}/recipes`)
      .then(res => {
        setRecipes(res.data);
        setFilteredRecipes(res.data);
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

  const shareRecipe = (recipe) => {
    // console.log(recipe)
    setCopyMessage({status: true, recipe_id: recipe.id});
    setTimeout(() => setCopyMessage({status: false, recipe_id: ''}), 3000);
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

                  <p><strong>Directions: </strong>{recipe.instructions}</p>
                  <p><strong>Ingredients: </strong>{recipe.ingredients}</p>
                  <p><strong>Category: </strong>{recipe.category_name}</p>
                  <p><strong>Source: </strong>{recipe.source_name}</p>
                </li>

                <CopyToClipboard
                  onCopy={()=> shareRecipe(recipe)}
                  text={`${baseUrl}/recipes/${recipe.id}`}
                >
                  <button>Share Recipe</button>
                </CopyToClipboard>

                <span className={
                  copyMessage.status && recipe.id === copyMessage.recipe_id 
                    ? 'share-message' 
                    : 'share-message hidden'}>
                  link copied to clipboard!
                </span>

              </div>
            )
          })}
        </ul>
      </div>

      {
        filteredRecipes.length === 0 && recipes.length > 0
          ? <div className='status-message'>No results. Reset your filters to see some delicious recipes!</div>
          : ''
      }
      {
        filteredRecipes.length === 0 && recipes.length === 0 && !isFetching
          ? <div className='status-message'>You haven't added any recipes yet.<br /><Link to={`/${userId}/add-recipe`}>Get started!</Link></div>
          : ''
      }
      {
        isFetching === true
          ? <div className='status-message'>Loading...</div>
          : ''
      }
    </div>
  )
}

export default RecipeList

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Recipe from './Recipe'
import recipeData from '../data/recipeData'
import Search from './Search';
import axiosWithAuth from '../utils/axiosWithAuth'

// Need to create a <Recipe /> component
// Need to map through the data and render a <Recipe /> component for each recipe
// Need to style recipe

// const RecipeList = () => {
//   const [recipes, setRecipes] = useState(recipeData);
//   const [filteredRecipes, setFilteredRecipes] = useState(recipes);

//   return (
//     <div className='recipe-container'>

//       <Search recipes={recipes} setFilteredRecipes={setFilteredRecipes} />

//       <h2>Recipes</h2>

//       <div className='recipe-list'>
//         {filteredRecipes.map(recipe => {
//           return (
//             <Recipe
//               key={recipe.id}
//               image={recipe.image}
//               name={recipe.name}
//               timeToPrepare={recipe.timeToPrepare}
//               servings={recipe.servings}
//               description={recipe.description}
//             />
//           )
//         })}
//       </div>

//     </div>
//   )
// }

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
      <Search recipes={recipes} setFilteredRecipes={setFilteredRecipes}/>
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

    </div>
  )
}

export default RecipeList

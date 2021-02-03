import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Recipe from './Recipe'
import recipeData from '../data/recipeData'
import Search from './Search';

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

  const routeToEdit = (recipe) => {
    const userId = localStorage.getItem('currentUserId')
    props.history.push(`/${userId}/recipes/${recipe.id}/edit-recipe`)
  }


  return (
    <div className='recipe-container'>
      <h2>Recipes</h2>

      <ul>
        {recipes.map(recipe => {
          return (
            <div className='recipe'>
              <button onClick={()=> {
                routeToEdit(recipe)
              }}>  Edit Recipe</button>
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

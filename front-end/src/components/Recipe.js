import React from 'react'
import recipeData from '../data/recipeData'

const Recipe = () => {
  return (
    <div className='recipe-card'>
      <img src={recipeData[0].image} />

      <span id='mins'>{recipeData[0].timeToPrepare} mins</span>

      <span id='servings'>{recipeData[0].servings} servings</span>
    </div>
  )
}

export default Recipe
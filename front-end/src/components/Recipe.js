import React from 'react'
import recipeData from '../data/recipeData'

const Recipe = (props) => {
  return (
    <div className='recipe-card'>
      <img src={props.image} />

      {/* <span id='mins'>{props.timeToPrepare} mins</span> */}

      {/* <span id='servings'>{props.servings} servings</span> */}
    </div>
  )
}

export default Recipe
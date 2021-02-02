import React from 'react'

const Recipe = (props) => {
  return (
    <div className='card'>

      <img src={props.image} className='card-image' />

      <div className='card-text'>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>

      <div className='card-stats'>
        <p>{props.servings} Servings</p>
        <p>{props.timeToPrepare} mins</p>
      </div>
    </div>
  )
}

export default Recipe
import React, { useState } from 'react';
import { connect } from 'react-redux';

function Search(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const { recipes, setFilteredRecipes } = props;

  const handleChange = e => {
    setSearchTerm(e.target.value)

    const compare = toCompare => {
      return toCompare.toLowerCase().includes(searchTerm.toLowerCase());
    }
    const filtered = recipes.filter(recipe => {
      return compare(recipe.title)
      || compare(recipe.source_name) ||
      compare(recipe.ingredients) ||
      compare(recipe.instructions) ||
      compare(recipe.category_name)
    })
    setFilteredRecipes(filtered);
  }

  const handleClear = e => {
    e.preventDefault();
    setSearchTerm('');
    setFilteredRecipes(recipes);
  }
  
  return (
    <div>
      <form onSubmit={e => e.preventDefault()}>
        <label htmlFor='search-bar'>Search recipes</label>
        <input
          type='text'
          name='search-bar'
          placeholder='Search recipes'
          value={searchTerm}
          onChange={handleChange}
        />
        <button onClick = {handleClear}>clear</button>
      </form>
    </div>
  )
}

export default connect(null)(Search);
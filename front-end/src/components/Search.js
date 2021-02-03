import React, { useState } from 'react';
import { connect } from 'react-redux';

function Search(props) {
  const [ searchTerm, setSearchTerm ] = useState('');
  const { recipes, setFilteredRecipes, categories, clearFilters } = props;

  const handleChange = e => {
    setSearchTerm(e.target.value)

    const compare = toCompare => {
      return toCompare.toLowerCase().includes(searchTerm.toLowerCase());
    }
    const filtered = recipes.filter(recipe => {
      return compare(recipe.title) ||
      compare(recipe.source_name) ||
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

  const filterClick = e => {
    const filtered = recipes.filter(recipe => e.target.dataset.cat === recipe.category_name)
    setFilteredRecipes(filtered);
  }
  
  return (
    <div>
      <div className='search-bar'>
        <form onSubmit={e => e.preventDefault()}>
          <label htmlFor='search-bar'>Search recipes</label>
          <input
            type='text'
            name='search-bar'
            placeholder='Search recipes'
            value={searchTerm}
            onChange={handleChange}
          />
        </form>
      </div>
      {/* <div className='filter'>
        {categories.map(category => {
          return (
            <div
              className='category'
              key={categories.indexOf(category)}
              onClick={filterClick}
              data-cat={category}
            >
              {category}  
            </div>
          )
        })}
      </div> */}
      <button onClick = {handleClear}>clear filters</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}
export default connect(mapStateToProps)(Search);
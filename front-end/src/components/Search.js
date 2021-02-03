import React, { useState } from 'react';
import { connect } from 'react-redux';

function Search(props) {
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ selected, setSelected ] = useState('');
  const { recipes, filteredRecipes, setFilteredRecipes } = props;

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
    setSelected('');
  }

  //grab categories from the recipes list
  let categories = recipes.map(recipe => {
    return recipe.category_name.toLowerCase()
  })
  //make sure they are unique
  const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  }
  categories = categories.filter(onlyUnique);

  
  const filterClick = e => {
    const filtered = recipes.filter(recipe => e.target.dataset.cat === recipe.category_name)
    setFilteredRecipes(filtered);
    setSelected(e.target.dataset.cat);
  }
  
  return (
    <div className='Search'>
      <div className='search-bar'>
        <form onSubmit={e => e.preventDefault()}>
          <label htmlFor='search-bar'><span className='visuallyHidden'>Search recipes</span></label>
          <input
            type='text'
            name='search-bar'
            placeholder='Search recipes'
            value={searchTerm}
            onChange={handleChange}
          />
        </form>
      </div>
      <div className='filter'>
        {categories.map(category => {
          return (
            <div
              className={ selected === category ? 'category selected' : 'category'}
              key={categories.indexOf(category)}
              onClick={filterClick}
              data-cat={category}
            >
              {category}  
            </div>
          )
        })}
      </div>
      {/* conditionally render the 'clear filters' button */
        filteredRecipes.length !== recipes.length
        ? <button onClick = {handleClear}>clear filters</button>
        : ''
      }
    </div>
  )
}

export default connect(null)(Search);
import React, { useState } from 'react'

export default function Search(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const { recipes, setFilteredRecipes } = props;

  const handleChange = e => {
    setSearchTerm(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    // const filtered = 123;
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='search-bar'>Search recipes</label>
        <input
          type='text'
          name='search-bar'
          placeholder='Search recipes'
          value={searchTerm}
          onChange={handleChange}
        />
        <button>search</button>
      </form>
    </div>
  )
}

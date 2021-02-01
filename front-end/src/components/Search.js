import React, { useState } from 'react'

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = e => {
    setSearchTerm(e.target.value)
  }

  return (
    <div>
      <h1>Hey, I'm a search bar</h1>
      <form>
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

import React, { useState } from 'react';

const SearchBar = (props) => {
  console.log(props)
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    console.log(event.target.value)
  };

  const handleSearch = (event) => {
    event.preventDefault();
    props.onBookQuery(query)
    // props.onFilterBook(query)
  };

  return (
    <form onSubmit={handleSearch}>
      <label htmlFor="search-input">Search</label>
      <input
        id="search-input"
        type="text"
        value={query}
        placeholder='search book....'
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;

import React from 'react';

const Search = ({ onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      className="p-2 border border-gray-300 rounded-lg mb-4 w-full"
      onChange={handleChange}
    />
  );
};

export default Search;

import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="p-3 border-bottom">
      <input
        type="text"
        className="form-control"
        placeholder="Search contacts..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;

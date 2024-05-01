import React, { useState } from "react";

function Filter({ onCategoryChange, onSearchChange }) {
  const [searchText, setSearchText] = useState(""); 

  function handleInputChange(event) {
    const searchText = event.target.value;
    setSearchText(searchText);
    onSearchChange(searchText); 
  }

  return (
    <div className="Filter">
      {}
      <input
        type="text"
        name="search"
        value={searchText}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;

import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState(""); // State for item name
  const [itemCategory, setItemCategory] = useState("Produce"); // State for item category

  // Handle input change for item name
  function handleNameChange(event) {
    setItemName(event.target.value);
  }

  // Handle input change for item category
  function handleCategoryChange(event) {
    setItemCategory(event.target.value);
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };
    onItemFormSubmit(newItem); // Pass new item to callback prop
    setItemName(""); // Clear input field
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={handleNameChange} />
      </label>
      <label>
        Category:
        <select name="category" value={itemCategory} onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>
      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

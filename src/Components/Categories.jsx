import React from "react";

export const Categorias = ({ filterItems, categorias }) => {
  return (
    <div className="categories-container">
      {categorias.map((category, index) => (
        <button
          type="button"
          className="filter-btn"
          key={index}
          onClick={() => filterItems(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

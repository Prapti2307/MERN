import React from "react";
import "../styles/RecipeSidebar.css";

const RecipeSidebar = ({ recipe, onClose }) => {
  if (!recipe) return null;

  return (
    <div className="sidebar-overlay">
      <div className="sidebar">
        <button className="close-button" onClick={onClose}>&times;</button>
        <h2>{recipe.title}</h2>
        <p><strong>Category:</strong> {recipe.category}</p>

        <h3>Ingredients</h3>
        <p>{recipe.ingredients}</p>

        <h3>Instructions</h3>
        <p>{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeSidebar;

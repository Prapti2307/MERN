import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RecipeContext } from "../App";
import RecipeSidebar from "./RecipeSidebar";
import "../styles/FilterRecipe.css";

const FilterRecipes = () => {
  const { recipes, setRecipes } = useContext(RecipeContext);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="filter-recipes-container">
      <h2 className="title">Filter Recipes</h2>

      {/* Search Bar & Dashboard Button */}
      <div className="header">
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <button onClick={() => navigate("/dashboard")} className="dashboard-btn">
          Dashboard
        </button>
      </div>

      {/* Recipe List */}
      <div className="recipe-list">
        {filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h3>{recipe.title}</h3>
            <button className="view-btn" onClick={() => setSelectedRecipe(recipe)}>View</button>
            <button className="edit-btn" onClick={() => navigate(`/edit-recipe/${recipe.id}`)}>Edit</button>
            <button className="delete-btn" onClick={() => handleDelete(recipe.id)}>Delete</button>
          </div>
        ))}
      </div>

      {/* Sidebar Component */}
      {selectedRecipe && (
        <RecipeSidebar recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
      )}
    </div>
  );
};

export default FilterRecipes;

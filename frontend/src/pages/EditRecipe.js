import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { RecipeContext } from "../App";
import "../styles/EditRecipe.css";

const EditRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipes, setRecipes } = useContext(RecipeContext);
  const [recipe, setRecipe] = useState({ title: "", ingredients: "", instructions: "" });

  useEffect(() => {
    const selectedRecipe = recipes.find((r) => r.id === parseInt(id));
    if (selectedRecipe) {
      setRecipe(selectedRecipe);
    }
  }, [id, recipes]);

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedRecipes = recipes.map((r) => (r.id === parseInt(id) ? recipe : r));
    setRecipes(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    navigate("/filter-recipes");
  };

  return (
    <div className="edit-recipe-container">
      <button className="close-button" onClick={() => navigate("/filter-recipes")}>&times;</button>
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit} className="edit-recipe-form">
        <label htmlFor="title">Recipe Title:</label>
        <input id="title" type="text" name="title" value={recipe.title} onChange={handleChange} required />
        
        <label htmlFor="ingredients">Ingredients:</label>
        <textarea id="ingredients" name="ingredients" value={recipe.ingredients} onChange={handleChange} required />
        
        <label htmlFor="instructions">Instructions:</label>
        <textarea id="instructions" name="instructions" value={recipe.instructions} onChange={handleChange} required />
        
        <button type="submit" className="update-button">Update Recipe</button>
      </form>
    </div>
  );
};

export default EditRecipe;

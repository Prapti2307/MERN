import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RecipeContext } from "../App";
import "../styles/AddRecipe.css";

const categories = ["South Indian", "Italian", "Korean", "Mexican", "Chinese"];

const AddRecipe = () => {
  const { recipes, setRecipes } = useContext(RecipeContext);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const formatText = (text) => {
    return text
      .split("\n")
      .map((line, index) =>
        /^\d+\.\s/.test(line) ? line : `${index + 1}. ${line}`
      )
      .join("\n");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !category || !ingredients || !instructions) {
      setMessage("Please fill in all fields.");
      return;
    }

    const newRecipe = {
      id: Date.now(),
      title,
      category,
      ingredients: formatText(ingredients),
      instructions: formatText(instructions),
    };

    const updatedRecipes = [...recipes, newRecipe];
    setRecipes(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));

    setTitle("");
    setCategory("");
    setIngredients("");
    setInstructions("");

    const addAnother = window.confirm(
      "Recipe added successfully! Do you want to add another recipe?"
    );

    if (!addAnother) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="add-recipe-container">
      <h2>ADD A NEW RECIPE</h2>
      <form onSubmit={handleSubmit}>
        <label>Recipe Title</label>
        <input
          type="text"
          placeholder="Enter Recipe Name (e.g., Spaghetti Carbonara)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <label>Ingredients</label>
        <textarea
          placeholder="List ingredients (e.g., 2 cups flour, 1 tsp salt, 1/2 cup milk, etc.)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        ></textarea>

        <label>Instructions</label>
        <textarea
          placeholder="Step-by-step instructions (e.g., 1. Mix ingredients well. 2. Heat a pan... )"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        ></textarea>

        {/* Buttons Section */}
        <div className="button-group">
          <button type="submit" className="add-btn">Add Recipe</button>
          <button type="button" className="dashboard-btn" onClick={() => navigate("/dashboard")}>
            Go to Dashboard
          </button>
        </div>
      </form>

      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default AddRecipe;

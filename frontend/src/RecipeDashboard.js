import React from "react";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css"; // Ensure this CSS file exists

const RecipeDashboard = ({ onLogout }) => {
  return (
    <div className="dashboard-container">
      <h1>🍽️ Recipe Sharing Platform</h1>
      <p>Browse, add, and manage your favorite recipes.</p>

      <div className="dashboard-buttons">
        <Link to="/add-recipe" className="btn">➕ Add Recipe</Link>
        <Link to="/filter-recipes" className="btn">🔍 Filter Recipes</Link>
      </div>

      <button onClick={onLogout} className="logout-btn">🚪 Logout</button>
    </div>
  );
};

export default RecipeDashboard;

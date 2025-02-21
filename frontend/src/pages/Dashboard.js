import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ onLogout }) => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h1>Welcome to the Recipe Sharing Platform!</h1>
      <p>Browse, add, and manage your recipes easily.</p>

      <div className="dashboard-buttons">
        <button onClick={() => navigate("/filter-recipes")}>Filter Recipes</button>
        <button onClick={() => navigate("/add-recipe")}>Add Recipe</button>
      </div>

      <button className="logout-btn" onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;

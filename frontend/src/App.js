import React, { useEffect, useState, createContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import FilterRecipe from "./pages/FilterRecipe";
import AddRecipe from "./pages/AddRecipe";
import EditRecipe from "./pages/EditRecipe";


export const RecipeContext = createContext();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedIn") === "true";
    setIsAuthenticated(loggedInUser);

    const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    setRecipes(storedRecipes);
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    setIsAuthenticated(false);
    window.location.href = "/"; // Redirects properly
  };

  return (
    <RecipeContext.Provider value={{ recipes, setRecipes }}>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/" />} />
        <Route path="/filter-recipes" element={isAuthenticated ? <FilterRecipe /> : <Navigate to="/" />} />
        <Route path="/add-recipe" element={isAuthenticated ? <AddRecipe /> : <Navigate to="/" />} />
        <Route path="/edit-recipe/:id" element={isAuthenticated ? <EditRecipe /> : <Navigate to="/" />} />
        <Route path="*" element={<Navigate to={isAuthenticated ? "/dashboard" : "/"} />} />
      </Routes>
    </RecipeContext.Provider>
  );
};

export default App;

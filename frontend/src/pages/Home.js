import React from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to Recipe Sharing Platform</h1>
      <p>Discover and share amazing recipes!</p>
      <div className="links">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Home;

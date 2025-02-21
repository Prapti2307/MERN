import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

const Auth = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password!");
      return;
    }

    if (email === "test@recipe.com" && password === "123456") {
      localStorage.setItem("loggedIn", "true"); // Store authentication status
      setIsAuthenticated(true);
      navigate("/dashboard"); // Redirect to Dashboard
    } else {
      setError("Invalid email or password!");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoFocus
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>

        <p className="register-text">
          Don't have an account?{" "}
          <button className="register-btn" onClick={() => navigate("/register")}>
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize navigation

  const handleRegister = () => {
    if (email && password) {
      // Simulating registration logic
      localStorage.setItem("user", JSON.stringify({ email, password }));
      alert("Registration successful! Redirecting to login...");
      navigate("/login"); // Redirect to Login Page
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <div className="register-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="register-btn" onClick={handleRegister}>
          Register
        </button>
        <p className="login-link">
          Already have an account? <a href="/login">Go to Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;

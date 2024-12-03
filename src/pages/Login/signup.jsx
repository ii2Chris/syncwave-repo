import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/navbar/navbar";
import "./Auth.css";

const Signup = () => {
  return (
    <div className="auth-container">
      <NavBar />

      <div className="poster">
        <div className="login-header">
          <h2>Welcome Back!</h2>
          <h3>Sign Up to get latest access to all concerts!</h3>
          <p>Ready to Rock?</p>
        </div>
        <div className="poster-content">
          <form className="login-form">
            <input
              type="email"
              placeholder="Your username or email"
              className="form-input"
            />
            <input
              type="password"
              placeholder="Your password"
              className="form-input"
            />

            <button type="submit" className="submit-button">
              Sign Up
            </button>

            <p className="change-site">
              Already have an account?
              <Link to="/login" className="switch-button">
                Login in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

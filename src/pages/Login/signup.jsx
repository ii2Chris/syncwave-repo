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
          <h2>Ready to Join the Crew?</h2>
          <h3>Sign Up to get latest access to all concerts!</h3>
          <p>Ready to Rock?</p>
        </div>
        <div className="poster-content">
          <form className="login-form">
            <input
              type="email"
              placeholder="Enter Email"
              className="form-input"
            />
            <input
              type="Username"
              placeholder="Enter Username"
              className="form-input"
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="form-input"
            />
            <input
              type="confirm-password"
              placeholder="Re-enter Password"
              className="form-input"
            />

            <button type="submit" className="submit-button">
              Sign Up
            </button>

            <p className="change-site">
              Already have an account?
              <Link to="/login" className="switch-button">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/navbar/navbar";
import "./Auth.css";

const Login = () => {
  return (
    <div className="auth-container">
      <NavBar />

      <div className="poster">
        <div className="login-header">
          <h2>Welcome Back!</h2>
          <h3>Login to your account</h3>
          <p>Ready to Rock?</p>
        </div>
        <div className="poster-content">
          <form className="login-form">
            <input
              type="email"
              placeholder="Your Username or Email"
              className="form-input"
            />
            <input
              type="password"
              placeholder="Your Password"
              className="form-input"
            />

            <button type="submit" className="submit-button">
              Log In
            </button>

            <p className="change-site">
              Dont have an account?
              <Link to="/signup" className="switch-button">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

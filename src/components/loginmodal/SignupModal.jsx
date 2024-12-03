// SignupModal.jsx
import React from "react";
import "./AuthModal.css";

const SignupModal = ({ isOpen, onClose, onSwitchToLogin }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="close-button">
          ×
        </button>

        <div className="modal-header">
          <h2>Ready to Join the Crew?</h2>
          <h3>Sign Up to get latest access to all concerts!</h3>
          <p>Ready to Rock?</p>
        </div>

        <div className="modal-form-container">
          <form className="auth-form">
            <input
              type="email"
              placeholder="Enter Email"
              className="form-input"
            />
            <input
              type="text"
              placeholder="Enter Username"
              className="form-input"
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="form-input"
            />
            <input
              type="password"
              placeholder="Re-enter Password"
              className="form-input"
            />
            <button type="submit" className="submit-button">
              Sign Up
            </button>

            <div className="change-auth">
              Already have an account?
              <button
                type="button"
                className="switch-button"
                onClick={onSwitchToLogin}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;

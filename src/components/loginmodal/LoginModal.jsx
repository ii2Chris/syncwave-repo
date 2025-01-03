// LoginModal.jsx
import React from "react";
import "./AuthModal.css";

const LoginModal = ({ isOpen, onClose, onSwitchToSignup }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="close-button">
          ×
        </button>

        <div className="modal-header">
          <h2>Welcome Back!</h2>
          <h3>Login to your account</h3>
          <p>Ready to Rock?</p>
        </div>

        <div className="modal-form-container">
          <form className="auth-form">
            <input
              type="text"
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

            <div className="change-auth">
              Don't have an account?
              <button
                type="button"
                className="switch-button"
                onClick={onSwitchToSignup}
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;

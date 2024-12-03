import React from "react";
import "./LoginModal.css";

const LoginModal = ({ isOpen, onClose }) => {
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
            Log In
          </button>

          <p className="switch-mode">
            Dont have an account?
            <button type="button" className="switch-button">
              Sign up
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;

// navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import LoginModal from "../loginmodal/LoginModal";
import SignupModal from "../loginmodal/SignupModal";

const NavBar = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    setIsSignupModalOpen(false);
  };

  const openSignupModal = () => {
    setIsSignupModalOpen(true);
    setIsLoginModalOpen(false);
  };

  const closeModals = () => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(false);
  };

  const switchToSignup = () => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(true);
  };

  const switchToLogin = () => {
    setIsSignupModalOpen(false);
    setIsLoginModalOpen(true);
  };

  return (
    <>
      <nav className="top-nav">
        <div className="top-nav-left">
          <Link to="/">Cert Gram</Link>
        </div>
        <div className="top-nav-right">
          <button className="login-btn" onClick={openLoginModal}>
            Log In
          </button>
          <button className="signup-btn" onClick={openSignupModal}>
            Sign Up
          </button>
        </div>
      </nav>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={closeModals}
        onSwitchToSignup={switchToSignup}
      />

      <SignupModal
        isOpen={isSignupModalOpen}
        onClose={closeModals}
        onSwitchToLogin={switchToLogin}
      />
    </>
  );
};

export default NavBar;

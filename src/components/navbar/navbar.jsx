import React from "react";
import "./NavBar.css";

const NavBar = ({ onOpenModal }) => {
  return (
    <nav className="top-nav">
      <div className="top-nav-left">
        <a href="/">Cert Gram</a>
      </div>
      <div className="top-nav-right">
        <button className="login-btn" onClick={onOpenModal}>
          Log In
        </button>
        <button className="signup-btn" onClick={onOpenModal}>
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default NavBar;

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

const Navbar = ({ hideAuthLinks }) => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/img1.jpg" alt="Logo" className="logo-img" />
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/">Services</Link>
        <Link to="/">Payment</Link>
        <Link to="/location-search">Location</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>
      {/* Hide auth buttons if hideAuthLinks is true */}
      {!hideAuthLinks && (
        <div className="auth-links">
          <Link to="/login">
            <button className="auth-btn">Log In</button>
          </Link>
          <Link to="/register">
            <button className="auth-btn">Sign Up</button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

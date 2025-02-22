import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

const Navbar = ({ hideAuthLinks, hideAuthLinks2 }) => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img src="/img1.jpg" alt="Logo" className="logo-img" />
        </Link>
      </div>
      {/* Hide nav links if hideAuthLinks2 is true */}
      {!hideAuthLinks2 && (
        <div className="nav-links">
          <Link to="/userdashboard">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/payment">Payment</Link>
          <Link to="/location-search">Location</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About Us</Link>
        </div>
      )}
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

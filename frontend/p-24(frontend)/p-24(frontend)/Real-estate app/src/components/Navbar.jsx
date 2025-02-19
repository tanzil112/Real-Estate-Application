import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

const Navbar = ({ hideAuthLinks = false, hideAuthLinks2 = false }) => {
  const location = useLocation(); // Get the current route path
  const isDashboard = location.pathname === "/"; // Check if user is on Dashboard page

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/img1.jpg" alt="Logo" className="logo-img" />
      </div>
      
      {/* Hide navigation links on Dashboard page */}
      {!isDashboard && (
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/payment">Payment</Link>
          <Link to="/location-search">Location</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
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

      {/* Hide this section if hideAuthLinks2 is true */}
      {!hideAuthLinks2 && !isDashboard && (
        <div className="auth-links2">
          <Link to="/home">
            <button className="auth-btn">Home</button>
          </Link>
          <Link to="/services">
            <button className="auth-btn">Services</button>
          </Link>
          <Link to="/payment">
            <button className="auth-btn">Payment</button>
          </Link>
          <Link to="/location-search">
            <button className="auth-btn">Location</button>
          </Link>
          <Link to="/contact">
            <button className="auth-btn">Contact</button>
          </Link>
          <Link to="/about">
            <button className="auth-btn">About</button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  return (
    <>
      <div className="dashboard-container">
        {/* Navbar */}
        <nav className="navbar">
          <div className="logo-container">
            <img src="/img1.jpg" alt="Logo" className="logo-img" />
          </div>
          <div className="nav-links">
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/">Services</Link>
            <Link to="/">Payment</Link>
            <Link to="/">Location</Link>
            <Link to="/">Contact</Link>
            <Link to="/about">About</Link>
          </div>
          </div>
          <div className="auth-links">
            <Link to="/login">
              <button className="auth-btn">Log In</button>
            </Link>
            <Link to="/register">
              <button className="auth-btn">Sign Up</button>
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="hero-section">
          
      <img src='HeroImage.webp' className='main-img'></img>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

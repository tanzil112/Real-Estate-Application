import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import Navbar from './Navbar';

function Dashboard() {
  return (
    <>
      <div className="dashboard-container">
        {/* Navbar */}
      <Navbar  />
        {/* Hero Section */}
        <div className="hero-section">
          
      <img src='HeroImage.webp' className='main-img'></img>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

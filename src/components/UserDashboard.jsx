import React from 'react';
import Navbar from './Navbar';

const UserDashboard = () => {
  return (
    <>
      {/* Pass hideAuthLinks as true to hide auth buttons */}
      <Navbar hideAuthLinks={true} />
      <div className="hero-section">
          
      <img src='HeroImage2.jpeg' className='main-img'></img>
        </div>
    </>
  );
};

export default UserDashboard;

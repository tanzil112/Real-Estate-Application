import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

const UserDashboard = () => {
  return (
    <>
      <Navbar hideAuthLinks={true} />
      <div className="hero-section">
        <img src="HeroImage2.jpeg" className="main-img"></img>

        <NavLink to="/location-search" className="overlay-text">
          <i>click to search your properties</i>
        </NavLink>
      </div>
    </>
  );
};

export default UserDashboard;

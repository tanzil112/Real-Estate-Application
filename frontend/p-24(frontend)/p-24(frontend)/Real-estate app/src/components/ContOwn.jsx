import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect } from "react";

const ContOwn = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="owner-container">
        <h1 className="heading">Contact Property Owner</h1>

        {/* Owner Information */}
        <div className="owner-info">
          <img src="/owner.jpg" alt="Owner" className="owner-image" />
          <div className="owner-details">
            <p><i className="fa-solid fa-building"></i> ABC Realty Pvt Ltd</p>
            <p><i className="fa-solid fa-map-marker-alt"></i> Hyderabad, India</p>
            <p><i className="fa-solid fa-phone"></i> <a href="tel:+919876543210">+91 98765 43210</a></p>
            <p><i className="fa-solid fa-envelope"></i> <a href="mailto:john.doe@example.com">user@example.com</a></p>
          </div> {/* Closing div for owner-details */}

          {/* Property Details */}
          <div className="property-info">
            <h2>Property Details</h2>
            <p><strong>Type:</strong> 3 BHK Apartment</p>
            <p><strong>Location:</strong> Madhapur, Hyderabad</p>
            <p><strong>Rent Range:</strong> ₹50,000 - ₹70,000</p>
            <p><strong>Size:</strong> 1500 sqft</p>
            <p><strong>Furnishing:</strong> Fully Furnished</p>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h2>Send a Message</h2>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="tel" placeholder="Your Phone" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit" className="send-btn">Send Message</button>
            </form>
          </div>

          {/* Social Media Links */}
          <div className="social-media">
            <h2>Follow Us</h2>
            <div className="icons">
              <a href="#"><i className="fa-brands fa-facebook"></i></a>
              <a href="#"><i className="fa-brands fa-twitter"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </div>

          {/* Back to Home */}
          <Link to="/location-search" className="back-home" style={{ color: "black" }}>← Back</Link>
        </div>
      </div>
    </>
  );
};

export default ContOwn;

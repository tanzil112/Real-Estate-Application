import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
const services = [
  { icon: 'fa-truck-fast', title: 'Property Transportation', description: 'We ensure safe and fast transportation of your belongings when relocating to your new home.' },
  { icon: 'fa-compass-drafting', title: 'Interior Design', description: 'Our expert designers bring your vision to life with personalized and modern interior solutions.' },
  { icon: 'fa-landmark', title: 'Home Loans Assistance', description: 'We simplify your home-buying journey by connecting you with trusted financial partners.' },
  { icon: 'fa-shield-alt', title: 'Property Insurance', description: 'Protect your home investment with comprehensive insurance plans tailored to your needs.' },
  { icon: 'fa-paint-roller', title: 'Painting Services', description: 'Give your home a fresh, vibrant look with professional painting and finishing services.' },
  { icon: 'fa-tools', title: 'Property Maintenance', description: 'Our maintenance services keep your property in pristine condition, hassle-free.' }
];

const ServicesComponent = () => {
  return (
    <>
    <Navbar />
    <div className="services-main">
      <h1 className="services-title">Our Comprehensive Real Estate Services</h1>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <i className={`fa-solid ${service.icon}`}></i>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      <div className="appointment-section">
        <h2>Book an Appointment or Make an Inquiry</h2>
        <p>Have questions or want to schedule a service? Fill out the form below and our team will get back to you.</p>
        <form className="appointment-form">
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="service">Select Service:</label>
          <select id="service" name="service">
            {services.map((service, index) => (
              <option key={index} value={service.title.toLowerCase().replace(/\s+/g, '-')}>{service.title}</option>
            ))}
          </select>

          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" rows="3"></textarea>

          <button type="submit">Submit Inquiry</button>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ServicesComponent;

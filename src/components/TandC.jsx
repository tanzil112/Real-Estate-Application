import React from 'react';
import { NavLink } from 'react-router-dom';

function TermsAndConditions() {
  return (
    <div className="terms-container">
      <h1 className="terms-header">Terms and Conditions</h1>

      <section className="terms-section">
        <h2>Welcome to HomeHIve</h2>
        <p>
          These Terms and Conditions outline the rules and regulations for the use of our real estate platform, which allows users to browse, list, and inquire about properties.
        </p>
        <p>
          By accessing or using <strong>HomeFinder</strong>, you agree to comply with these Terms and Conditions. If you do not agree, please refrain from using our services.
        </p>
      </section>

      <section className="terms-section">
        <h2>1. Definitions</h2>
        <ul>
          <li><strong>"We", "Us", or "Our":</strong> Refers to <strong>HomeFinder</strong>, the platform facilitating property transactions.</li>
          <li><strong>"User", "You", or "Your":</strong> Refers to individuals or entities using our services.</li>
          <li><strong>"Service":</strong> Refers to property listings, inquiries, and other tools available on HomeFinder.</li>
        </ul>
      </section>

      <section className="terms-section">
        <h2>2. Use of Services</h2>
        <h3>2.1 Eligibility</h3>
        <ul>
          <li>You must be at least 18 years old to list or inquire about properties.</li>
          <li>All information provided must be accurate and up to date.</li>
        </ul>
        <h3>2.2 Permitted Use</h3>
        <p>
          Users may only use the platform for lawful real estate transactions. Fraudulent activity, data scraping, or unauthorized commercial use is strictly prohibited.
        </p>
      </section>

      <section className="terms-section">
        <h2>3. Account Registration</h2>
        <p>
          Users may need to create an account to list properties or make inquiries. You are responsible for safeguarding your login credentials.
        </p>
      </section>

      <section className="terms-section">
        <h2>4. Service Features</h2>
        <ul>
          <li><strong>Property Listings:</strong> Users can list properties for sale or rent.</li>
          <li><strong>Inquiry System:</strong> Buyers and renters can contact property owners or agents.</li>
          <li><strong>Third-Party Services:</strong> Some tools may integrate mortgage calculators, legal services, or other third-party resources.</li>
        </ul>
      </section>

      <section className="terms-section">
        <h2>5. User Responsibilities</h2>
        <p>
          By using HomeFinder, you agree to:
        </p>
        <ul>
          <li>Provide truthful property details and avoid misleading advertisements.</li>
          <li>Refrain from posting illegal, offensive, or harmful content.</li>
          <li>Ensure compliance with local property laws and regulations.</li>
        </ul>
      </section>

      <section className="terms-section">
        <h2>6. Payments and Fees</h2>
        <p>
          Some features may require payment, such as premium listings. Payment details will be provided before purchase. We are not liable for payment processor errors.
        </p>
      </section>

      <section className="terms-section">
        <h2>7. Intellectual Property</h2>
        <p>
          All content on HomeFinder, including text, images, and software, is our property. Users may not copy or distribute content without permission.
        </p>
      </section>

      <section className="terms-section">
        <h2>Contact Us</h2>
        <p>If you have any questions regarding these Terms and Conditions, please contact us at:</p>
        <p><strong>Email:</strong> support@homefinder.com</p>
        <p><strong>Phone:</strong> [+91012345678]</p>
      </section>
      <NavLink to="/register" style={{ color: "white" }}>
        <i className="fa-solid fa-arrow-left"></i> Back
      </NavLink>
    </div>
  );
}

export default TermsAndConditions;
import React from "react";
import { useParams } from "react-router-dom";
import { properties } from "./LocationSearch"; // Importing property data

const PropertyDetails = () => {
  const { id } = useParams(); // Get property ID from URL
  const property = properties.find((p) => p.id === Number(id));

  if (!property) {
    return <h2 className="error-message">Property not found!</h2>;
  }

  return (
    <div className="property-details-container">
      <h1>{property.type} in {property.area}</h1>
      <div className="property-content">
        <img src={property.image} alt={property.type} className="property-image" />
        
        <div className="property-info">
          <p><strong>Location:</strong> {property.location}</p>
          <p><strong>Area:</strong> {property.area}</p>
          <p><strong>Price:</strong> {property.range}</p>
          <p><strong>Bedrooms:</strong> {property.bedrooms || "2 BHK"}</p>
          <p><strong>Bathrooms:</strong> {property.bathrooms || "2"}</p>
          <p><strong>Furnishing:</strong> {property.furnishing || "Semi-Furnished"}</p>
          <p><strong>Size:</strong> {property.size || "1200 sqft"}</p>
          <p><strong>Amenities:</strong> {property.amenities ? property.amenities.join(", ") : "Gym, Parking, Security"}</p>
          <button className="contact-button">Contact Owner</button>
        </div>
      </div>

      <div className="amenities-section">
        <h2>Amenities</h2>
        <div className="amenities-list">
          <div className="amenity"><i className="fa-solid fa-dumbbell"></i> Gym</div>
          <div className="amenity"><i className="fa-solid fa-person-swimming"></i> Swimming Pool</div>
          <div className="amenity"><i className="fa-solid fa-elevator"></i> Lift</div>
          <div className="amenity"><i className="fa-solid fa-car"></i> Parking</div>
          <div className="amenity"><i className="fa-solid fa-shield-halved"></i> Security</div>
          <div className="amenity"><i className="fa-solid fa-wifi"></i> WiFi</div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;

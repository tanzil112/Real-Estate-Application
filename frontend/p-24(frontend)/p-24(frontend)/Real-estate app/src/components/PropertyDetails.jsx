import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { properties } from "./LocationSearch"; // Importing properties
import Navbar from "./Navbar";

const PropertyDetails = () => {
  const { id } = useParams(); // Get property ID from URL
  const navigate = useNavigate();
  const property = properties.find((p) => p.id === Number(id));

  const ownerfun = () => {
    navigate("/owner");
  };

  if (!property) {
    return <h2 className="error-message">Property not found!</h2>;
  }

  // Extract address for Google Maps
  const googleMapsUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(
    property.location
  )}`;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="property-details-container">
        <h1>
          {property.type} in {property.area}
        </h1>
        <div className="property-content">
          <img
            src={property.image}
            alt={property.type}
            className="property-image"
          />

          <div className="property-info">
            <p>
              <strong>Location:</strong> {property.location}
            </p>
            <p>
              <strong>Area:</strong> {property.area}
            </p>
            <p>
              <strong>Price:</strong> {property.range}
            </p>
            <p>
              <strong>Bedrooms:</strong> {property.bedrooms || "2 BHK"}
            </p>
            <p>
              <strong>Bathrooms:</strong> {property.bathrooms || "2"}
            </p>
            <p>
              <strong>Furnishing:</strong>{" "}
              {property.furnishing || "Semi-Furnished"}
            </p>
            <p>
              <strong>Size:</strong> {property.size || "1200 sqft"}
            </p>
            <p>
              <strong>Amenities:</strong>{" "}
              {property.amenities
                ? property.amenities.join(", ")
                : "Gym, Parking, Security"}
            </p>
            <button className="contact-button" onClick={ownerfun}>
              Contact Owner
            </button>
          </div>
        </div>

        <div className="amenities-section">
          <h2>Amenities</h2>
          <div className="amenities-list">
            <div className="amenity">
              <i className="fa-solid fa-dumbbell"></i> Gym
            </div>
            <div className="amenity">
              <i className="fa-solid fa-person-swimming"></i> Swimming Pool
            </div>
            <div className="amenity">
              <i className="fa-solid fa-elevator"></i> Lift
            </div>
            <div className="amenity">
              <i className="fa-solid fa-car"></i> Parking
            </div>
            <div className="amenity">
              <i className="fa-solid fa-shield-halved"></i> Security
            </div>
            <div className="amenity">
              <i className="fa-solid fa-wifi"></i> WiFi
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="location-section">
          <h2>Location</h2>
          <iframe
            width="800"
            height="600"
            src="https://www.openstreetmap.org/export/embed.html?bbox=77.5946,12.9716,77.5946,12.9716&layer=mapnik"
          ></iframe>
        </div>

        {/* Description Section */}
        <div className="property-description">
          <h2>Description</h2>
          <p>
            Looking for a one-bedroom on rent? This spacious one-bedroom flat
            for rent in Madhapur for 18,000 is ideal for bachelors. This 405
            sqft. home is on the 3rd floor & comes with ample space for bike
            parking.
          </p>
          <p>
            With amenities such as security, this home offers you a lot of
            convenience. Access to bus stop & pharmacies is very easy &
            convenient from this house.
          </p>
          <p>
            If you are a frequent traveler, then you'll be happy to note that
            the train station is less than 10 minutes from this house.
          </p>
          <p>
            With Meridian School, Manthan International School, and Orchids The
            International School close to this home, you'll be able to provide
            your children with many options to choose from. Being situated near
            Image Hospitals, Ankura Hospital for women & children, and Spintas
            Health Care, emergency care is very easily available at any time.
          </p>
          <p>
            If you are looking for gifts, or just want to spoil yourself,
            HappinessSale, Best Fashion, and Kapidhwaja Castle Main Branch have
            a wide variety of things that you can choose from. With BR Hitech
            Theatre, Cilk Cini Craft, & Director Purijagannadh's Office Cave
            close by, you can catch your favorite movies running & never worry
            about missing a show because of traffic.
          </p>
        </div>
      </div>
    </>
  );
};

export default PropertyDetails;

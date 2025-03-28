// import React from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { useEffect } from "react";
// import { properties } from "./LocationSearch"; // Importing properties
// import Navbar from "./Navbar";

// const PropertyDetails = () => {
//   const { id } = useParams(); // Get property ID from URL
//   const navigate = useNavigate();
//   const property = properties.find((p) => p.id === Number(id));

//   const ownerfun = () => {
//     navigate("/owner");
//   };

//   if (!property) {
//     return <h2 className="error-message">Property not found!</h2>;
//   }

//   // Extract address for Google Maps
//   const googleMapsUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(
//     property.location
//   )}`;
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   return (
//     <>
//       <Navbar />
//       <div className="property-details-container">
//         <h1>
//           {property.type} in {property.area}
//         </h1>
//         <div className="property-content">
//           <img
//             src={property.image}
//             alt={property.type}
//             className="property-image"
//           />

//           <div className="property-info">
//             <p>
//               <strong>Location:</strong> {property.location}
//             </p>
//             <p>
//               <strong>Area:</strong> {property.area}
//             </p>
//             <p>
//               <strong>Price:</strong> {property.range}
//             </p>
//             <p>
//               <strong>Bedrooms:</strong> {property.bedrooms || "2 BHK"}
//             </p>
//             <p>
//               <strong>Bathrooms:</strong> {property.bathrooms || "2"}
//             </p>
//             <p>
//               <strong>Furnishing:</strong>{" "}
//               {property.furnishing || "Semi-Furnished"}
//             </p>
//             <p>
//               <strong>Size:</strong> {property.size || "1200 sqft"}
//             </p>
//             <p>
//               <strong>Amenities:</strong>{" "}
//               {property.amenities
//                 ? property.amenities.join(", ")
//                 : "Gym, Parking, Security"}
//             </p>
//             <button className="contact-button" onClick={ownerfun}>
//               Contact Owner
//             </button>
//           </div>
//         </div>

//         <div className="amenities-section">
//           <h2>Amenities</h2>
//           <div className="amenities-list">
//             <div className="amenity">
//               <i className="fa-solid fa-dumbbell"></i> Gym
//             </div>
//             <div className="amenity">
//               <i className="fa-solid fa-person-swimming"></i> Swimming Pool
//             </div>
//             <div className="amenity">
//               <i className="fa-solid fa-elevator"></i> Lift
//             </div>
//             <div className="amenity">
//               <i className="fa-solid fa-car"></i> Parking
//             </div>
//             <div className="amenity">
//               <i className="fa-solid fa-shield-halved"></i> Security
//             </div>
//             <div className="amenity">
//               <i className="fa-solid fa-wifi"></i> WiFi
//             </div>
//           </div>
//         </div>

//         {/* Location Section */}
//         <div className="location-section">
//           <h2>Location</h2>
//           <iframe 
//     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7611.461467942758!2d78.4747512!3d17.385044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1708424581234!5m2!1sen!2sin" 
//     width="600" 
//     height="450" 
//    >
// </iframe>

//         </div>

//         {/* Description Section */}
//         <div className="property-description">
//           <h2>Description</h2>
//           <p>
//             Looking for a one-bedroom on rent? This spacious one-bedroom flat
//             for rent in Madhapur for 18,000 is ideal for bachelors. This 405
//             sqft. home is on the 3rd floor & comes with ample space for bike
//             parking.
//           </p>
//           <p>
//             With amenities such as security, this home offers you a lot of
//             convenience. Access to bus stop & pharmacies is very easy &
//             convenient from this house.
//           </p>
//           <p>
//             If you are a frequent traveler, then you'll be happy to note that
//             the train station is less than 10 minutes from this house.
//           </p>
//           <p>
//             With Meridian School, Manthan International School, and Orchids The
//             International School close to this home, you'll be able to provide
//             your children with many options to choose from. Being situated near
//             Image Hospitals, Ankura Hospital for women & children, and Spintas
//             Health Care, emergency care is very easily available at any time.
//           </p>
//           <p>
//             If you are looking for gifts, or just want to spoil yourself,
//             HappinessSale, Best Fashion, and Kapidhwaja Castle Main Branch have
//             a wide variety of things that you can choose from. With BR Hitech
//             Theatre, Cilk Cini Craft, & Director Purijagannadh's Office Cave
//             close by, you can catch your favorite movies running & never worry
//             about missing a show because of traffic.
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PropertyDetails;




import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { properties } from "./LocationSearch";
import Navbar from "./Navbar";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const API_KEY = "AIzaSyAFqK1eM1laNU-fEgM4mTpLlSvXinMrk9U"; // Replace with your actual API key

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const PropertyDetails = () => {
  const { id } = useParams(); // Get property ID from URL
  const navigate = useNavigate();
  const property = properties.find((p) => p.id === Number(id));

  // State for storing coordinates
  const [coordinates, setCoordinates] = useState({ lat: 17.4498, lng: 78.3915 }); // Default to Madhapur, Hyderabad
  const [loading, setLoading] = useState(true);

  // Fetch coordinates dynamically using Google Geocoding API
  useEffect(() => {
    if (property) {
      const fetchCoordinates = async () => {
        try {
          const response = await fetch(
            https//maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(property.location)}&key=${API_KEY}
          );
          const data = await response.json();
          if (data.results.length > 0) {
            const { lat, lng } = data.results[0].geometry.location;
            setCoordinates({ lat, lng });
          } else {
            console.error("Location not found");
          }
        } catch (error) {
          console.error("Error fetching coordinates:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchCoordinates();
    }
  }, [property]);

  // If property is not found, show an error message
  if (!property) {
    return <h2 className="error-message">Property not found!</h2>;
  }

  return (
    <>
      <Navbar hideAuthLinks={true}/>
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
            <button className="contact-button" onClick={() => navigate("/owner")}>
              Contact Owner
            </button>
          </div>
        </div>

        {/* Amenities Section */}
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

        {/* Google Maps with Dynamic Pin */}
        <div className="location-section">
          <h2>Location</h2>
          {loading ? (
            <p>Loading map...</p>
          ) : (
            <LoadScript googleMapsApiKey={API_KEY}>
              <GoogleMap mapContainerStyle={mapContainerStyle} center={coordinates} zoom={15}>
                <Marker position={coordinates} />
              </GoogleMap>
            </LoadScript>
          )}
        </div>

        {/* Property Description */}
        <div className="property-description">
          <h2>Description</h2>
          <p>Looking for a one-bedroom on rent? ...</p>
          <p>With amenities such as security, this home offers you a lot of convenience...</p>
          <p>If you are a frequent traveler, then you'll be happy to note...</p>
        </div>
      </div>
    </>
  );
};

export default PropertyDetails;
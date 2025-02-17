import React, { useState } from "react";
import Select from "react-select";
import Navbar from "./Navbar";

const API_URL = "https://realty-mole-property-api.p.rapidapi.com/properties";
const API_KEY = "YOUR_RAPIDAPI_KEY"; // Replace with your actual API key

const locations = [
  { value: "Bangalore", label: "Bangalore" },
  { value: "Mumbai", label: "Mumbai" },
  { value: "Delhi", label: "Delhi" },
  { value: "Hyderabad", label: "Hyderabad" },
];

const propertyTypes = [
  { value: "co-working", label: "Co-Working" },
  { value: "shop", label: "Shop" },
  { value: "showroom", label: "Showroom" },
  { value: "industrial-building", label: "Industrial Building" },
  { value: "industrial-shed", label: "Industrial Shed" },
  { value: "warehouse", label: "Warehouse" },
  { value: "restaurant-cafe", label: "Restaurant/Cafe" },
];

const LocationSearch = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [searchType, setSearchType] = useState("rent");
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!selectedLocation || !selectedProperty) {
      alert("Please select both a location and property type.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${API_URL}?location=${selectedLocation.value}&propertyType=${selectedProperty.value}&type=${searchType}`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": API_KEY,
            "X-RapidAPI-Host": "realty-mole-property-api.p.rapidapi.com",
          },
        }
      );

      if (!response.ok) throw new Error("Failed to fetch properties");

      const data = await response.json();
      setProperties(data); // Assuming API returns an array of properties
    } catch (err) {
      setError("Failed to fetch data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar hideAuthLinks={true} />
      <br />
      <div className="search-container">
        <div className="search-filters">
          <Select
            options={locations}
            placeholder="Select a City"
            value={selectedLocation}
            onChange={setSelectedLocation}
            className="location-dropdown"
          />
          <Select
            options={propertyTypes}
            placeholder="Property Type"
            value={selectedProperty}
            onChange={setSelectedProperty}
            className="property-dropdown"
          />
          <div className="radio-buttons">
            <label>
              <input
                type="radio"
                value="rent"
                checked={searchType === "rent"}
                onChange={() => setSearchType("rent")}
              />
              Rent
            </label>
            <label>
              <input
                type="radio"
                value="buy"
                checked={searchType === "buy"}
                onChange={() => setSearchType("buy")}
              />
              Buy
            </label>
          </div>
          <button className="search-btn" onClick={handleSearch}>
            🔍 Search
          </button>
        </div>
      </div>

      {/* Display Results Below */}
      {loading && <p>Loading properties...</p>}
      {error && <p className="error">{error}</p>}

      <div className="results-container">
        {properties.map((property, index) => (
          <div className="card" key={index}>
            <img src={property.image || "/placeholder.jpg"} alt={property.name} />
            <h3>{property.name || "Unknown Property"}</h3>
            <p>Location: {property.location || "Not Available"}</p>
            <p>Type: {property.propertyType || "Not Specified"}</p>
            <p>Price: {property.price || "Contact for Price"}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default LocationSearch;

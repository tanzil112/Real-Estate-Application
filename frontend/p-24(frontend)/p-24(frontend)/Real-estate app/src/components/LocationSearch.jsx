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

const areas = [
  { value: "Madhapur", label: "Madhapur" },
  { value: "Hitech-City", label: "Hitech-City" },
  { value: "Kondapur", label: "Kondapur" },
  { value: "Kukatpally", label: "Kukatpally" },
  { value: "Kphb", label: "Kphb" },
];

const priceRanges = [
  { value: "10000-50000", label: "₹10,000 - ₹50,000" },
  { value: "50000-100000", label: "₹50,000 - ₹100,000" },
  { value: "100000+", label: "₹100,000+" },
];

const propertyTypes = [
  { value: "apartment", label: "Apartment" },
  { value: "house", label: "House" },
  { value: "villa", label: "Villa" },
  { value: "land", label: "Land" },
  { value: "industrial-shed", label: "Industrial Shed" },
  { value: "warehouse", label: "Warehouse" },
  { value: "restaurant-cafe", label: "Restaurant/Cafe" },
];

const LocationSearch = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedArea, setSelectedArea] = useState(null);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [selectedRange, setSelectedRange] = useState(null);
  const [searchType, setSearchType] = useState("rent");
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!selectedLocation || !selectedArea || !selectedProperty || !selectedRange) {
      alert("Please select a location, area, property type, and range.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${API_URL}?location=${selectedLocation.value}&area=${selectedArea.value}&propertyType=${selectedProperty.value}&priceRange=${selectedRange.value}&type=${searchType}`,
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
          {/* Search Type */}
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

          {/* Dropdowns */}
          <Select
            options={locations}
            placeholder="Select a City"
            value={selectedLocation}
            onChange={setSelectedLocation}
            className="location-dropdown"
          />
          
          <Select
            options={areas}
            placeholder="Select Area"
            value={selectedArea}
            onChange={setSelectedArea}
            className="area-dropdown"
          />

          <Select
            options={propertyTypes}
            placeholder="Property Type"
            value={selectedProperty}
            onChange={setSelectedProperty}
            className="property-dropdown"
          />

          <Select
            options={priceRanges}
            placeholder="Select Price Range"
            value={selectedRange}
            onChange={setSelectedRange}
            className="range-dropdown"
          />

          {/* Search Button */}
          <button className="search-btn" onClick={handleSearch}>
            🔍 Search
          </button>
        </div>
      </div>

      {/* Display Results Below */}
      {loading && <p>Loading properties...</p>}
      {error && <p className="error">{error}</p>}

      <div className="results-container">
        {properties.length > 0 ? (
          properties.map((property, index) => (
            <div className="card" key={index}>
              <img src={property.image || "/placeholder.jpg"} alt={property.name} />
              <h3>{property.name || "Unknown Property"}</h3>
              <p>Location: {property.location || "Contact for location"}</p>
              <p>Area: {property.area || "Contact for area"}</p>
              <p>Type: {property.propertyType || "Contact for type"}</p>
              <p>Price: {property.range || "Contact for price"}</p>

              <button>View Details</button>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </>
  );
};

export default LocationSearch;
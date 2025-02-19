import React, { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";

// Sample property data
const properties = [
  // Madhapur
  { id: 1, location: "Hyderabad", area: "Madhapur", type: "Apartment", range: "₹10,000 - ₹50,000", image: "/images/flat1.jpg" },
  { id: 2, location: "Hyderabad", area: "Madhapur", type: "Apartment", range: "₹10,000 - ₹50,000", image: "/images/flat1.jpg" },
  { id: 3, location: "Hyderabad", area: "Madhapur", type: "Apartment", range: "₹10,000 - ₹50,000", image: "/images/flat1.jpg" },
  { id: 4, location: "Hyderabad", area: "Madhapur", type: "Apartment", range: "₹10,000 - ₹50,000", image: "/images/flat1.jpg" },
  { id: 5, location: "Hyderabad", area: "Madhapur", type: "Apartment", range: "₹10,000 - ₹50,000", image: "/images/flat1.jpg" },
  
  // Hitech City
  { id: 6, location: "Hyderabad", area: "Hitech City", type: "Villa", range: "₹1,00,000+", image: "/images/villa2.jpg" },
  { id: 7, location: "Hyderabad", area: "Hitech City", type: "Villa", range: "₹1,00,000+", image: "/images/villa2.jpg" },
  { id: 8, location: "Hyderabad", area: "Hitech City", type: "Villa", range: "₹1,00,000+", image: "/images/villa2.jpg" },
  { id: 9, location: "Hyderabad", area: "Hitech City", type: "Villa", range: "₹1,00,000+", image: "/images/villa2.jpg" },
  { id: 10, location: "Hyderabad", area: "Hitech City", type: "Villa", range: "₹1,00,000+", image: "/images/villa2.jpg" },
  
  // Kukatpally
  { id: 11, location: "Hyderabad", area: "Kukatpally", type: "House", range: "₹20,000 - ₹60,000", image: "/images/house1.jpg" },
  { id: 12, location: "Hyderabad", area: "Kukatpally", type: "House", range: "₹20,000 - ₹60,000", image: "/images/house1.jpg" },
  { id: 13, location: "Hyderabad", area: "Kukatpally", type: "House", range: "₹20,000 - ₹60,000", image: "/images/house1.jpg" },
  { id: 14, location: "Hyderabad", area: "Kukatpally", type: "House", range: "₹20,000 - ₹60,000", image: "/images/house1.jpg" },
  { id: 15, location: "Hyderabad", area: "Kukatpally", type: "House", range: "₹20,000 - ₹60,000", image: "/images/house1.jpg" },
  
  // KPHB
  { id: 16, location: "Hyderabad", area: "KPHB", type: "Apartment", range: "₹10,000 - ₹50,000", image: "/images/flat3.jpg" },
  { id: 16, location: "Hyderabad", area: "KPHB", type: "Apartment", range: "₹10,000 - ₹50,000", image: "/images/flat3.jpg" },
  { id: 16, location: "Hyderabad", area: "KPHB", type: "Apartment", range: "₹10,000 - ₹50,000", image: "/images/flat3.jpg" },
  { id: 16, location: "Hyderabad", area: "KPHB", type: "Apartment", range: "₹10,000 - ₹50,000", image: "/images/flat3.jpg" },

  { id: 17, location: "Hyderabad", area: "KPHB", type: "Apartment", range: "₹18,000 - ₹25,000", image: "/images/flat3.jpg" },
  { id: 18, location: "Hyderabad", area: "KPHB", type: "House", range: "₹50,000 - ₹1,00,000", image: "/images/flat3.jpg" },
  { id: 19, location: "Hyderabad", area: "KPHB", type: "House", range: "₹50,000 - ₹1,00,000", image: "/images/flat3.jpg" },
  { id: 20, location: "Hyderabad", area: "KPHB", type: "House", range: "₹50,000 - ₹1,00,000", image: "/images/flat3.jpg" },
  
  // Kondapur
  { id: 21, location: "Hyderabad", area: "Kondapur", type: "Villa", range: "₹2,00,000+", image: "/images/villa3.jpg" },
  { id: 22, location: "Hyderabad", area: "Kondapur", type: "Villa", range: "₹2,00,000+", image: "/images/villa3.jpg" },
  { id: 23, location: "Hyderabad", area: "Kondapur", type: "Villa", range: "₹2,00,000+", image: "/images/villa3.jpg" },
  { id: 24, location: "Hyderabad", area: "Kondapur", type: "Villa", range: "₹2,00,000+", image: "/images/villa3.jpg" },
  { id: 25, location: "Hyderabad", area: "Kondapur", type: "Villa", range: "₹2,00,000+", image: "/images/villa3.jpg" }
];


// City-to-Area Mapping
const cityAreas = {
  Hyderabad: [
    { value: "Madhapur", label: "Madhapur" },
    { value: "KPHB", label: "KPHB" },
    { value: "Hitech City", label: "Hitech City" },
    { value: "Kukatpally", label: "Kukatpally" },
    { value: "Kondapur", label: "Kondapur" },
  ],
  Delhi: [
    { value: "Connaught Place", label: "Connaught Place" },
    { value: "Karol Bagh", label: "Karol Bagh" },
    { value: "Saket", label: "Saket" },
  ],
  Bangalore: [
    { value: "Electronic City", label: "Electronic City" },
    { value: "Whitefield", label: "Whitefield" },
    { value: "Indiranagar", label: "Indiranagar" },
  ],
};

// Property Types
const propertyTypes = [
  { value: "Apartment", label: "Apartment" },
  { value: "House", label: "House" },
  { value: "Villa", label: "Villa" },
];

// Price Ranges
const priceRanges = [
  { value: "₹10,000 - ₹50,000", label: "₹10,000 - ₹50,000" },
  { value: "₹50,000 - ₹1,00,000", label: "₹50,000 - ₹1,00,000" },
  { value: "₹1,00,000+", label: "₹1,00,000+" },
];

const LocationSearch = () => {
  const [filters, setFilters] = useState({
    location: null,
    area: null,
    type: null,
    price: null,
  });
  const [filteredResults, setFilteredResults] = useState([]);

  // Search Function
  const handleSearch = () => {
    const results = properties.filter((property) => {
      const matchesLocation = !filters.location || property.location === filters.location.value;
      const matchesArea = !filters.area || property.area.split(", ").includes(filters.area.value);
      const matchesType = !filters.type || property.type.split(", ").map(t => t.toLowerCase()).includes(filters.type.value.toLowerCase());
      const matchesPrice = !filters.price || property.range.split(", ").includes(filters.price.value);
  
      return matchesLocation && matchesArea && matchesType && matchesPrice;
    });
  
    setFilteredResults(results);
  };
  

  return (
    <div className="search-container">
      <h2>Find Your Property</h2>

      <div className="search-filters">
        {/* City Selection */}
        <Select
          options={[
            { value: "Hyderabad", label: "Hyderabad" },
            { value: "Delhi", label: "Delhi" },
            { value: "Bangalore", label: "Bangalore" },
          ]}
          placeholder="Select a City"
          onChange={(value) => setFilters({ ...filters, location: value, area: null })}
        />

        {/* Area Selection (Dynamically Updates Based on City) */}
        <Select
          options={filters.location ? cityAreas[filters.location.value] || [] : []}
          placeholder="Select an Area"
          onChange={(value) => setFilters({ ...filters, area: value })}
          isDisabled={!filters.location}
        />

        {/* Property Type Selection */}
        <Select
          options={propertyTypes}
          placeholder="Property Type"
          onChange={(value) => setFilters({ ...filters, type: value })}
        />

        {/* Price Range Selection */}
        <Select
          options={priceRanges}
          placeholder="Price Range"
          onChange={(value) => setFilters({ ...filters, price: value })}
        />

        <div className="search-button">
        <button  onClick={handleSearch}>
          Search
        </button>
        </div>
      </div>

      {/* Results Section */}
      <div className="results-container">
        {filteredResults.length > 0 ? (
          filteredResults.map((property) => (
            <div className="card" key={property.id}>
              <img src={property.image} alt={property.name} />
              <h3>{property.name}</h3>
              <p><strong>Location:</strong> {property.location}</p>
              <p><strong>Area:</strong> {filters.area ? filters.area.value : property.area}</p>
              <p><strong>Type:</strong> {property.type}</p>
              <p><strong>Price:</strong> {property.range}</p>
              <Link to={`/property/${property.id}`}>
                <button>View Details</button>
              </Link>
            </div>
          ))
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default LocationSearch;







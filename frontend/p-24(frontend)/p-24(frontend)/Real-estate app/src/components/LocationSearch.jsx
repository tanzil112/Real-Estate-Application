import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";

// Sample property data
const properties = [
  { id: 1, location: "Hyderabad", area: "Madhapur", type: "Apartment", range: "₹10,000 - ₹50,000", image: "/images/flat1.jpg" },
  { id: 2, location: "Hyderabad", area: "Madhapur", type: "Apartment", range: "₹10,000 - ₹50,000", image: "/images/flat1.jpg" },
  { id: 3, location: "Hyderabad", area: "Madhapur", type: "Apartment", range: "₹10,000 - ₹50,000", image: "/images/flat1.jpg" },
  { id: 4, location: "Hyderabad", area: "Madhapur", type: "Apartment", range: "₹10,000 - ₹50,000", image: "/images/flat1.jpg" },
  { id: 5, location: "Hyderabad", area: "Madhapur", type: "Apartment", range: "₹10,000 - ₹50,000", image: "/images/flat1.jpg" },
  
  { id: 6, location: "Hyderabad", area: "Hitech City", type: "Villa", range: "₹1,00,000+", image: "/images/villa2.jpg" },
  { id: 7, location: "Hyderabad", area: "Hitech City", type: "Villa", range: "₹1,00,000+", image: "/images/villa2.jpg" },
  { id: 8, location: "Hyderabad", area: "Hitech City", type: "Villa", range: "₹1,00,000+", image: "/images/villa2.jpg" },
  { id: 9, location: "Hyderabad", area: "Hitech City", type: "Villa", range: "₹1,00,000+", image: "/images/villa2.jpg" },
  { id: 10, location: "Hyderabad", area: "Hitech City", type: "Villa", range: "₹1,00,000+", image: "/images/villa2.jpg" },
  
  { id: 11, location: "Hyderabad", area: "Kukatpally", type: "House", range: "₹20,000 - ₹60,000", image: "/images/house1.jpg" },
  { id: 12, location: "Hyderabad", area: "Kukatpally", type: "House", range: "₹20,000 - ₹60,000", image: "/images/house1.jpg" },
  { id: 13, location: "Hyderabad", area: "Kukatpally", type: "House", range: "₹20,000 - ₹60,000", image: "/images/house1.jpg" },
  { id: 14, location: "Hyderabad", area: "Kukatpally", type: "House", range: "₹20,000 - ₹60,000", image: "/images/house1.jpg" },
  { id: 15, location: "Hyderabad", area: "Kukatpally", type: "House", range: "₹20,000 - ₹60,000", image: "/images/house1.jpg" },
  
  { id: 16, location: "Hyderabad", area: "KPHB", type: "Apartment", range: "₹10,000 - ₹50,000", image: "/images/flat3.jpg" },
  { id: 17, location: "Hyderabad", area: "KPHB", type: "Apartment", range: "₹10,000 - ₹50,000", image: "/images/flat3.jpg" },
  { id: 18, location: "Hyderabad", area: "KPHB", type: "Apartment", range: "₹10,000 - ₹50,000", image: "/images/flat3.jpg" },
  { id: 19, location: "Hyderabad", area: "KPHB", type: "Apartment", range: "₹10,000 - ₹50,000", image: "/images/flat3.jpg" },

  { id: 20, location: "Hyderabad", area: "KPHB", type: "Apartment", range: "₹18,000 - ₹25,000", image: "/images/flat3.jpg" },
  { id: 21, location: "Hyderabad", area: "KPHB", type: "House", range: "₹50,000 - ₹1,00,000", image: "/images/flat3.jpg" },
  { id: 22, location: "Hyderabad", area: "KPHB", type: "House", range: "₹50,000 - ₹1,00,000", image: "/images/flat3.jpg" },
  { id: 23, location: "Hyderabad", area: "KPHB", type: "House", range: "₹50,000 - ₹1,00,000", image: "/images/flat3.jpg" },
  
  { id: 24, location: "Hyderabad", area: "Kondapur", type: "Villa", range: "₹2,00,000+", image: "/images/villa3.jpg" },
  { id: 25, location: "Hyderabad", area: "Kondapur", type: "Villa", range: "₹2,00,000+", image: "/images/villa3.jpg" },
  { id: 26, location: "Hyderabad", area: "Kondapur", type: "Villa", range: "₹2,00,000+", image: "/images/villa3.jpg" },
  { id: 27, location: "Hyderabad", area: "Kondapur", type: "Villa", range: "₹2,00,000+", image: "/images/villa3.jpg" },
  { id: 28, location: "Hyderabad", area: "Kondapur", type: "Villa", range: "₹2,00,000+", image: "/images/villa3.jpg" }
];

// Property filter options
const propertyTypes = [
  { value: "Apartment", label: "Apartment" },
  { value: "House", label: "House" },
  { value: "Villa", label: "Villa" }
];

const priceRanges = [
  { value: "₹10,000 - ₹50,000", label: "₹10,000 - ₹50,000" },
  { value: "₹50,000 - ₹1,00,000", label: "₹50,000 - ₹1,00,000" },
  { value: "₹1,00,000+", label: "₹1,00,000+" }
];

const areas = [
  { value: "Madhapur", label: "Madhapur" },
  { value: "Hitech City", label: "Hitech City" },
  { value: "Kukatpally", label: "Kukatpally" }
];

// Exporting properties for PropertyDetails.jsx
export { properties };

const LocationSearch = () => {
  const [filters, setFilters] = useState({ location: null, area: null, type: null, price: null });
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    const savedResults = localStorage.getItem("filteredProperties");
    if (savedResults) {
      setFilteredResults(JSON.parse(savedResults));
    }
  }, []);

  const handleSearch = () => {
    const results = properties.filter((property) => {
      return (
        (!filters.location || property.location === filters.location.value) &&
        (!filters.area || property.area === filters.area.value) &&
        (!filters.type || property.type === filters.type.value) &&
        (!filters.price || property.range === filters.price.value)
      );
    });

    setFilteredResults(results);
    localStorage.setItem("filteredProperties", JSON.stringify(results));
  };

  return (
    <div className="search-container">
      <h2>Find Your Property</h2>
      <div className="search-filters">
        <Select
          options={[{ value: "Hyderabad", label: "Hyderabad" }]}
          placeholder="Select a City"
          onChange={(value) => setFilters({ ...filters, location: value, area: null })}
        />
        <Select
          options={filters.location ? areas : []}
          placeholder="Select an Area"
          onChange={(value) => setFilters({ ...filters, area: value })}
          isDisabled={!filters.location}
        />
        <Select
          options={propertyTypes}
          placeholder="Property Type"
          onChange={(value) => setFilters({ ...filters, type: value })}
        />
        <Select
          options={priceRanges}
          placeholder="Price Range"
          onChange={(value) => setFilters({ ...filters, price: value })}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="results-container">
        {filteredResults.length > 0 ? (
          filteredResults.map((property) => (
            <div className="card" key={property.id}>
              <img src={property.image} alt={property.type} />
              <h3>{property.type}</h3>
              <p><strong>Location:</strong> {property.location}</p>
              <p><strong>Area:</strong> {property.area}</p>
              <p><strong>Price:</strong> {property.range}</p>
              <Link to={`/property/${property.id}`}>
                <button>View Details</button>
              </Link>
            </div>
          ))
        ) : (
          <p>No properties found.</p>
        )}
      </div>
    </div>
  );
};

export default LocationSearch;

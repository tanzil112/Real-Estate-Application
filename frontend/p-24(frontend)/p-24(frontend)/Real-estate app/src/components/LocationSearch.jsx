import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";

// Sample property data
const properties = [
  // Hyderabad Properties
  { id: 1, location: "Hyderabad", area: "Madhapur", type: "Apartment", range: "₹10,000 - ₹50,000", image: "./apart2.jpg" },
  { id: 2, location: "Hyderabad", area: "Hitech City", type: "Villa", range: "₹1,00,000+", image: "./apart3.jpg" },
  { id: 3, location: "Hyderabad", area: "Madhapur", type: "Apartment", range: "₹10,000 - ₹50,000", image: "./apart4.jpg" },
  { id: 4, location: "Hyderabad", area: "Madhapur", type: "Apartment", range: "₹10,000 - ₹50,000", image: "./public/flat4.jpg" },
  { id: 5, location: "Hyderabad", area: "Madhapur", type: "villa",  range: "₹10,000 - ₹50,000", image: "./flat4.jpg" },

  // Delhi Properties
  { id: 6, location: "Delhi", area: "Dwarka", type: "Apartment", range: "₹10,000 - ₹50,000", image: "./apart5.jpg" },
  { id: 7, location: "Delhi", area: "Saket", type: "House", range: "₹10,000 - ₹50,000", image: "./pent1.jpg" },
  { id: 8, location: "Delhi", area: "Karol Bagh", type: "Villa", range: "₹100,000+", image: "./villa3.jpeg" },
  { id: 9, location: "Delhi", area: "Connaught Place", type: "Penthouse", range: "₹3,00,000+", image: "./pent4.jpg" },
  { id: 10, location: "Delhi", area: "Vasant Kunj", type: "Apartment", range: "₹50,000 - ₹1,00,000", image: "./apart6.jpg" },

  // Bangalore Properties
  { id: 11, location: "Bangalore", area: "Whitefield", type: "Apartment", range: "₹10,000 - ₹50,000", image: "./flat5.jpg" },
  { id: 12, location: "Bangalore", area: "Whitefield", type: "Apartment", range: "₹10,000 - ₹50,000", image: "./flat6.jpg" },
  { id: 13, location: "Bangalore", area: "Koramangala", type: "House", range: "₹50,000 - ₹1,00,000", image: "./apart5.jpg" },
  { id: 14, location: "Bangalore", area: "Electronic City", type: "Villa", range: "₹1,00,000+", image: "./pent4.jpg" },
  { id: 15, location: "Bangalore", area: "Indiranagar", type: "Penthouse", range: "₹1,00,000+", image: "/pent3.jpg" },
  { id: 16, location: "Bangalore", area: "MG Road", type: "Studio Apartment", range: "₹10,000 - ₹50,000", image: "./apart7.jpg" }
];

export { properties };



const locations = [
  { value: "Bangalore", label: "Bangalore" },
  { value: "Delhi", label: "Delhi" },
  { value: "Hyderabad", label: "Hyderabad" },
];

const cityAreas = {
  Hyderabad: [
    { value: "Madhapur", label: "Madhapur" },
    { value: "Hitech City", label: "Hitech City" },
    { value: "Kondapur", label: "Kondapur" },
    { value: "Kukatpally", label: "Kukatpally" },
    { value: "KPHB", label: "KPHB" },
  ],
  Delhi: [
    { value: "Dwarka", label: "Dwarka" },
    { value: "Saket", label: "Saket" },
    { value: "Karol Bagh", label: "Karol Bagh" },
    { value: "Connaught Place", label: "Connaught Place" },
    { value: "Vasant Kunj", label: "Vasant Kunj" },
  ],
  Bangalore: [
    { value: "Whitefield", label: "Whitefield" },
    { value: "Koramangala", label: "Koramangala" },
    { value: "Electronic City", label: "Electronic City" },
    { value: "Indiranagar", label: "Indiranagar" },
    { value: "MG Road", label: "MG Road" },
  ],
};

const priceRanges = [
  { value: "10000-50000", label: "₹10,000 - ₹50,000" },
  { value: "50000-100000", label: "₹50,000 - ₹100,000" },
  { value: "100000+", label: "₹100,000+" },
];

const propertyTypes = [
  { value: "Apartment", label: "Apartment" },
  { value: "House", label: "House" },
  { value: "Villa", label: "Villa" },
  { value: "Penthouse", label: "Penthouse" },
  { value: "Studio Apartment", label: "Studio Apartment" },
];

const LocationSearch = () => {
  const [filters, setFilters] = useState({ location: null, area: null, type: null, price: null });
  const [filteredResults, setFilteredResults] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedArea, setSelectedArea] = useState(null);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [selectedRange, setSelectedRange] = useState(null);
  const [availableAreas, setAvailableAreas] = useState([]);

  useEffect(() => {
    const savedResults = localStorage.getItem("filteredProperties");
    if (savedResults) {
      setFilteredResults(JSON.parse(savedResults));
    }
  }, []);

  // Update available areas when city is selected
  useEffect(() => {
    if (selectedLocation) {
      setAvailableAreas(cityAreas[selectedLocation.value] || []);
      setSelectedArea(null); // Reset area selection when city changes
    } else {
      setAvailableAreas([]);
    }
  }, [selectedLocation]);

  const handleSearch = () => {
    const results = properties.filter((property) => {
      return (
        (!selectedLocation || property.location === selectedLocation.value) &&
        (!selectedArea || property.area === selectedArea.value) &&
        (!selectedProperty || property.type === selectedProperty.value) &&
        (!selectedRange || property.range === selectedRange.label)
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
          options={locations}
          placeholder="Select a City"
          value={selectedLocation}
          onChange={setSelectedLocation}
          className="location-dropdown"
        />
        <Select
          options={availableAreas}
          placeholder="Select Area"
          value={selectedArea}
          onChange={setSelectedArea}
          className="area-dropdown"
          isDisabled={!selectedLocation} // Disable if no city is selected
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
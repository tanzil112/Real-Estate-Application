import React, { useState } from "react";

const properties = [
  { id: 1, name: "Luxury Apartment", location: "Bangalore", type: "rent", price: "₹25,000/month", image: "/apartment.jpg" },
  { id: 2, name: "Co-Working Space", location: "Delhi", type: "rent", price: "₹10,000/month", image: "/coworking.jpg" },
  { id: 3, name: "Industrial Shed", location: "Bangalore", type: "buy", price: "₹50,00,000", image: "/shed.jpg" },
  { id: 4, name: "Showroom Space", location: "Mumbai", type: "rent", price: "₹30,000/month", image: "/showroom.jpg" },
  { id: 5, name: "Warehouse", location: "Bangalore", type: "buy", price: "₹70,00,000", image: "/warehouse.jpg" },
];

const LocationSearch = () => {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearch = () => {
    const results = properties.filter(
      (item) =>
        item.location.toLowerCase().includes(location.toLowerCase()) &&
        item.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredResults(results);
  };

  return (
    <div>
      <h2>Find Your Property</h2>
      
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Select Type</option>
          <option value="rent">Rent</option>
          <option value="buy">Buy</option>
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Display Results on the Same Page */}
      <div className="results-container">
        {filteredResults.length > 0 ? (
          filteredResults.map((item) => (
            <div key={item.id} className="card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p><strong>Location:</strong> {item.location}</p>
              <p><strong>Price:</strong> {item.price}</p>
              <button>View Details</button>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default LocationSearch;

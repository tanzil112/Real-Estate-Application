import React, { useState, useEffect } from "react";
import Select from "react-select";
import Navbar from "./Navbar";

const propertyTypes = [
  { value: "Apartment", label: "Apartment" },
  { value: "House", label: "House" },
  { value: "Villa", label: "Villa" },
];

const priceRanges = [
  { value: "10000-50000", label: "₹10,000 - ₹50,000" },
  { value: "50000-100000", label: "₹50,000 - ₹100,000" },
  { value: "100000+", label: "₹100,000+" },
];

const SellerDashboard = () => {
  const [address, setAddress] = useState("");
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [selectedRange, setSelectedRange] = useState(null);
  const [size, setSize] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");
  const [sellerPhoneNumber, setSellerPhoneNumber] = useState("");
  const [isFurnished, setIsFurnished] = useState(false);
  const [propertyImages, setPropertyImages] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setPropertyImages(imageUrls);
  };

  const handleSubmit = () => {
    const newProperty = {
      id: Date.now(),
      type: selectedProperty?.label,
      range: selectedRange?.label,
      address,
      size,
      furnished: isFurnished,
      sellerName,
      sellerEmail,
      sellerPhoneNumber,
      images: propertyImages,
    };

    setFilteredResults([...filteredResults, newProperty]);
    alert("Your property has been added successfully!");
  };

  return (
    <>
      <Navbar hideAuthLinks={true} />
      <div className="seller-dashboard2">
        <h2>Seller Dashboard</h2>
        <div className="form-container">
          <input type="text" placeholder="Enter Address" value={address} onChange={(e) => setAddress(e.target.value)} />
          <Select options={propertyTypes} placeholder="Property Type" value={selectedProperty} onChange={setSelectedProperty} />
          <Select options={priceRanges} placeholder="Select Price Range" value={selectedRange} onChange={setSelectedRange} />
          <input type="text" placeholder="Enter Size" value={size} onChange={(e) => setSize(e.target.value)} />
          <label>
            <input type="checkbox" checked={isFurnished} onChange={() => setIsFurnished(!isFurnished)} /> Furnished
          </label>
          <input type="text" placeholder="Enter Seller Name" value={sellerName} onChange={(e) => setSellerName(e.target.value)} />
          <input type="email" placeholder="Enter Seller Email" value={sellerEmail} onChange={(e) => setSellerEmail(e.target.value)} />
          <input type="number" placeholder="Enter Seller Phone Number" value={sellerPhoneNumber} onChange={(e) => setSellerPhoneNumber(e.target.value)} />
          <label>Upload your property images:</label>
          <input type="file" accept="image/*" multiple onChange={handleImageUpload} />

          <button onClick={handleSubmit}>Add Property</button>
        </div>

        <div className="results-container2">
  {filteredResults.length > 0 ? (
    filteredResults.map((property) => (
      <div className="card" key={property.id} style={{ flex: '0 0 calc(33.333% - 20px)', boxSizing: 'border-box' }}>
        {property.images && property.images.map((image, index) => (
          <img key={index} src={image} alt={property.type} onError={(e) => (e.target.src = "/uploadimage")} />
        ))}
        <h3>{property.type}</h3>
        <p><strong>Address:</strong> {property.address || "N/A"}</p>
        <p><strong>Size:</strong> {property.size || "N/A"}</p>
        <p><strong>Price:</strong> {property.range}</p>
        <p><strong>Furnished:</strong> {property.furnished ? "Yes" : "No"}</p>
        <p><strong>Seller Name:</strong> {property.sellerName || "N/A"}</p>
        <p><strong>Seller Email:</strong> {property.sellerEmail || "N/A"}</p>
        <p><strong>Seller Phone Number:</strong> {property.sellerPhoneNumber || "N/A"}</p>
      </div>
    ))
  ) : (
    <p>No properties found.</p>
  )}
</div>
      </div>
    </>
  );
};

export default SellerDashboard;

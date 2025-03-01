// import React, { useState, useEffect } from "react";
// import Select from "react-select";
// import Navbar from "./Navbar";
// import { Sellerpropertydata } from "./Sellerpropertydata";

// const propertyTypes = [
//   { value: "Apartment", label: "Apartment" },
//   { value: "House", label: "House" },
//   { value: "Villa", label: "Villa" },
// ];

// const priceRanges = [
//   { value: "10000-50000", label: "₹10,000 - ₹50,000" },
//   { value: "50000-100000", label: "₹50,000 - ₹100,000" },
//   { value: "100000+", label: "₹100,000+" },
// ];

// const SellerDashboard = () => {
//   const [address, setAddress] = useState("");
//   const [selectedProperty, setSelectedProperty] = useState(null);
//   const [selectedRange, setSelectedRange] = useState(null);
//   const [size, setSize] = useState("");
//   const [sellerName, setSellerName] = useState("");
//   const [sellerEmail, setSellerEmail] = useState("");
//   const [sellerPhoneNumber, setSellerPhoneNumber] = useState("");
//   const [isFurnished, setIsFurnished] = useState(false);
//   const [filteredResults, setFilteredResults] = useState([]);

//   useEffect(() => {
//     console.log("Filtered results updated:", filteredResults);
//   }, [filteredResults]);

//   const handleSearch = () => {
//     console.log("Properties before filtering:", Sellerpropertydata);

//     const results = Sellerpropertydata.filter((property) => {
//       return (
//         (!selectedProperty || property.type.toLowerCase() === selectedProperty.value.toLowerCase()) &&
//         (!selectedRange || property.range === selectedRange.label) &&
//         (!address || (property.address && property.address.toLowerCase().includes(address.toLowerCase()))) &&
//         (!size || (property.size && property.size.toLowerCase().includes(size.toLowerCase()))) &&
//         (!isFurnished || property.furnished) &&
//         (!sellerName || (property.sellerName && property.sellerName.toLowerCase().includes(sellerName.toLowerCase()))) &&
//         (!sellerEmail || (property.sellerEmail && property.sellerEmail.toLowerCase().includes(sellerEmail.toLowerCase()))) &&
//         (!sellerPhoneNumber || (property.sellerPhoneNumber && property.sellerPhoneNumber.toLowerCase().includes(sellerPhoneNumber.toLowerCase())))
//       );
//     });

//     console.log("Filtered Results:", results);
//     setFilteredResults(results);
//   };

//   return (
//     <>
//       <Navbar hideAuthLinks={true} />
//       <div className="search-container">
//         <h2>Seller Dashboard</h2>
//         <h2>vender Details</h2>
//         <div className="search-filters">
//           <input type="text" placeholder="Enter Address" value={address} onChange={(e) => setAddress(e.target.value)} />
//           <Select options={propertyTypes} placeholder="Property Type" value={selectedProperty} onChange={setSelectedProperty} />
//           <Select options={priceRanges} placeholder="Select Price Range" value={selectedRange} onChange={setSelectedRange} />

//           <label>
//             <input type="checkbox" checked={isFurnished} onChange={() => setIsFurnished(!isFurnished)} /> Furnished
//           </label>

//           <input type="text" placeholder="Enter Size" value={size} onChange={(e) => setSize(e.target.value)} />
//           <input type="text" placeholder="Enter Seller Name" value={sellerName} onChange={(e) => setSellerName(e.target.value)} />
//           <input type="email" placeholder="Enter Seller Email" value={sellerEmail} onChange={(e) => setSellerEmail(e.target.value)} />
//           <input type="number" placeholder="Enter Seller Phone Number" value={sellerPhoneNumber} onChange={(e) => setSellerPhoneNumber(e.target.value)} />

//           <button onClick={handleSearch}>Add property</button>
//         </div>

//         <div className="results-container">
//           {filteredResults.length > 0 ? (
//             filteredResults.map((property) => (
//               <div className="card" key={property.id}>
//                 <img 
//                   src={property.image || "/image"} 
//                   alt={property.type} 
//                   onError={(e) => (e.target.src = "/image")} 
//                 />
//                 <h3>{property.type}</h3>
//                 <p><strong>Address:</strong> {property.address || "N/A"}</p>
//                 <p><strong>Size:</strong> {property.size || "N/A"}</p>
//                 <p><strong>Price:</strong> {property.range}</p>
//                 <p><strong>Furnished:</strong> {property.furnished ? "Yes" : "No"}</p>
//                 <p><strong>Seller Name:</strong> {property.sellerName || "N/A"}</p>
//                 <p><strong>Seller Email:</strong> {property.sellerEmail || "N/A"}</p>
//                 <p><strong>Seller Phone Number:</strong> {property.sellerPhoneNumber || "N/A"}</p>
                
//               </div>
//             ))
//           ) : (
//             <p>No properties found.</p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default SellerDashboard;




import React, { useState } from "react";
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
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setPropertyImages(imageUrls);
  };

  const handleSubmit = () => {
    const newProperty = {
      id: Date.now(),
      type: selectedProperty?.label || "N/A",
      range: selectedRange?.label || "N/A",
      address: address || "N/A",
      size: size || "N/A",
      furnished: isFurnished,
      sellerName: sellerName || "N/A",
      sellerEmail: sellerEmail || "N/A",
      sellerPhoneNumber: sellerPhoneNumber || "N/A",
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
          <h2>Vendor Details</h2>
          <div className="search-filters">
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
        </div>

        <div className="results-container">
          {filteredResults.length > 0 ? (
            filteredResults.map((property) => (
              <div className="card" key={property.id} style={{ flex: "0 0 calc(33.333% - 20px)", boxSizing: "border-box" }}>
                {property.images.length > 0 && (
                  <img src={property.images[0]} alt={property.type} onError={(e) => (e.target.src = "/uploadimage")} />
                )}
                <h3>{property.type}</h3>
                <p><strong>Address:</strong> {property.address}</p>
                <p><strong>Size:</strong> {property.size}</p>
                <p><strong>Price:</strong> {property.range}</p>
                <p><strong>Furnished:</strong> {property.furnished ? "Yes" : "No"}</p>
                <p><strong>Seller Name:</strong> {property.sellerName}</p>
                <p><strong>Seller Email:</strong> {property.sellerEmail}</p>
                <p><strong>Seller Phone Number:</strong> {property.sellerPhoneNumber}</p>
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
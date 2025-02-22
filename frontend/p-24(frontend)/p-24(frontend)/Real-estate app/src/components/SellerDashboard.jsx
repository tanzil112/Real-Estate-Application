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




import React, { useState, useEffect } from "react";
import Select from "react-select";
import Navbar from "./Navbar";
import { Sellerpropertydata } from "./Sellerpropertydata";

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
  const [filteredResults, setFilteredResults] = useState([]);
  const [image, setImage] = useState(null);

  useEffect(() => {
    console.log("Filtered results updated:", filteredResults);
  }, [filteredResults]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleSearch = () => {
    console.log("Properties before filtering:", Sellerpropertydata);

    const results = Sellerpropertydata.filter((property) => {
      return (
        (!selectedProperty || property.type.toLowerCase() === selectedProperty.value.toLowerCase()) &&
        (!selectedRange || property.range === selectedRange.label) &&
        (!address || (property.address && property.address.toLowerCase().includes(address.toLowerCase()))) &&
        (!size || (property.size && property.size.toLowerCase().includes(size.toLowerCase()))) &&
        (!isFurnished || property.furnished) &&
        (!sellerName || (property.sellerName && property.sellerName.toLowerCase().includes(sellerName.toLowerCase()))) &&
        (!sellerEmail || (property.sellerEmail && property.sellerEmail.toLowerCase().includes(sellerEmail.toLowerCase()))) &&
        (!sellerPhoneNumber || (property.sellerPhoneNumber && property.sellerPhoneNumber.toLowerCase().includes(sellerPhoneNumber.toLowerCase())))
      );
    });

    console.log("Filtered Results:", results);
    setFilteredResults(results);
  };

  return (
    <>
      <Navbar hideAuthLinks={true} />
      <div className="search-container">
        <h2>Seller Dashboard</h2>
        <h2>Vendor Details</h2>
        <div className="search-filters">
          <input type="text" placeholder="Enter Address" value={address} onChange={(e) => setAddress(e.target.value)} />
          <Select options={propertyTypes} placeholder="Property Type" value={selectedProperty} onChange={setSelectedProperty} />
          <Select options={priceRanges} placeholder="Select Price Range" value={selectedRange} onChange={setSelectedRange} />

          <label>
            <input type="checkbox" checked={isFurnished} onChange={() => setIsFurnished(!isFurnished)} /> Furnished
          </label>

          <input type="text" placeholder="Enter Size" value={size} onChange={(e) => setSize(e.target.value)} />
          <input type="text" placeholder="Enter Seller Name" value={sellerName} onChange={(e) => setSellerName(e.target.value)} />
          <input type="email" placeholder="Enter Seller Email" value={sellerEmail} onChange={(e) => setSellerEmail(e.target.value)} />
          <input type="number" placeholder="Enter Seller Phone Number" value={sellerPhoneNumber} onChange={(e) => setSellerPhoneNumber(e.target.value)} />

          {/* Image Upload Field */}
          <input type="file" accept="image/*" onChange={handleImageUpload} />

          <button onClick={handleSearch}>Add Property</button>
        </div>

        <div className="results-container">
          {filteredResults.length > 0 ? (
            filteredResults.map((property) => (
              <div className="card" key={property.id}>
                <img 
                  src={image || property.image || "/image"} 
                  alt={property.type} 
                  onError={(e) => (e.target.src = "/image")} 
                  style={{ width: "100%", height: "200px", objectFit: "cover" }} 
                />
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

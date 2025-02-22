import React from "react";
import { useParams } from "react-router-dom";
import { Sellerpropertydata } from "./Sellerpropertydata";

const SellerPropertyList = () => {
  const { id } = useParams();
  const property = Sellerpropertydata.find((p) => p.id === Number(id)); 

  if (!property) return <h2 className="not-found">Property not found</h2>;

  return (
    <div className="search-container">
      <div className="property-card">
        <h2 className="property-title">{property.type || "N/A"}</h2>
        <img 
          src={property.image || "/images/default.jpg"} 
          alt={property.type || "Property"} 
          className="property-image" 
          onError={(e) => (e.target.src = "/images/default.jpg")} 
        />
        <div className="property-details">
          <p><strong>Address:</strong> {property.address || "N/A"}</p>
          <p><strong>Size:</strong> {property.size || "N/A"}</p>
          <p><strong>Price:</strong> {property.range || "N/A"}</p>
          <p><strong>Description:</strong> {property.description || "No description available"}</p>
          <p><strong>Furnished:</strong> {property.furnished ? "Yes" : "No"}</p>
          <p><strong>Seller Name:</strong> {property.sellerName || "N/A"}</p>
          <p><strong>Email:</strong> {property.sellerEmail || "N/A"}</p>
          <p><strong>Phone Number:</strong> {property.sellerPhoneNumber || "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

export default SellerPropertyList;







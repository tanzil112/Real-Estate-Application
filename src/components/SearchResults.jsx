// import React from "react";
// import { useParams } from "react-router-dom";
// const properties = [
//   { id: 1, name: "Rent", location: "Hyderabad", area: "Madhapur, Kondapur, Hitech City, Kukatpally, KPHB", type: "Apartment", range: "₹10,000 - ₹50,000", image: "/images/flat1.jpg" },
//   { id: 2, name: "buy", location: "Delhi", area: "Connaught Place", type: "House", range: "₹50,000 - ₹1,00,000", image: "/images/house.jpg" },
//   { id: 3, name: "Rent", location: "Bangalore", area: "Electronic City", type: "villa", range: "₹1,00,000+", image: "/images/villa.jpg" },
// ];
// const SearchResults = () => {
//   const { id } = useParams();
//   const property = properties.find((p) => p.id === parseInt(id));
// if (!property) return <h2 className="not-found">Property not found</h2>;
// return (
//     <div className="search-container">
//       <div className="property-card">
//         <h2 className="property-title">{property.name}</h2>
//         <img src={property.image} alt={property.name} className="property-image" />
//         <div className="property-details">
//           <p><strong>Location:</strong> {property.location}</p>
//           <p><strong>Areas Covered:</strong> {property.area}</p>
//           <p><strong>Type:</strong> {property.type.charAt(0).toUpperCase() + property.type.slice(1)}</p>
//           <p><strong>Price:</strong> {property.range}</p>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default SearchResults;


import React from "react";
import { useParams } from "react-router-dom";

const properties = [
  { id: 1, name: "Rent", location: "Hyderabad", area: "Madhapur, Kondapur, Hitech City, Kukatpally, KPHB", type: "Apartment", range: "₹10,000 - ₹50,000", image: "/images/flat1.jpg" },
  { id: 2, name: "Buy", location: "Delhi", area: "Connaught Place", type: "House", range: "₹50,000 - ₹1,00,000", image: "/images/house.jpg" },
  { id: 3, name: "Rent", location: "Bangalore", area: "Electronic City", type: "Villa", range: "₹1,00,000+", image: "/images/villa.jpg" },
];

const SearchResults = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) return <h2 className="not-found">Property not found</h2>;

  return (
    <div className="search-container">
      <div className="property-card">
        <h2 className="property-title">{property.name}</h2>
        <img src={property.image} alt={property.name} className="property-image" onError={(e) => e.target.src = "/images/default.jpg"} />
        <div className="property-details">
          <p><strong>Location:</strong> {property.location}</p>
          <p><strong>Areas Covered:</strong> {property.area}</p>
          <p><strong>Type:</strong> {property.type.charAt(0).toUpperCase() + property.type.slice(1)}</p>
          <p><strong>Price:</strong> {property.range}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;

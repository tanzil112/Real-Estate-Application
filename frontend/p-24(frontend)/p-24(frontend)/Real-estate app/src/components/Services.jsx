import React from 'react';
import Navbar from './Navbar';
function Services () {
  return (
    <div>
      <Navbar hideAuthLinks={true}/>
      <div className="services-main">
        <p id='ser'>Our popular services :</p>
        <div className="ser-div">

          <div className="ser-card">
          <div><i class="fa-solid fa-truck-fast fa-fade"></i></div>
          <div><i className="fa-solid fa-compass-drafting fa-fade"></i></div>
          <div><i className="fa-solid fa-landmark fa-fade"></i></div>
          <div><i className="fa-solid fa-house-crack fa-fade"></i></div>
          <div><i className="fa-solid fa-palette fa-fade"></i></div>
          </div>
          <div className="ser-description">
            <div><p id="neww">Transpotation</p></div>
            <div><p id="neww">Interior Design</p></div>
            <div><p id="neww">Home Loan</p></div>
            <div><p id="neww">Insurance</p></div>
            <div><p id="neww">Painting</p></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;
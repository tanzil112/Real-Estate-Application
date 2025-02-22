import React from 'react';

function Footer () {
  return (
    <footer id="footer">
        <div className="header-container">
          <p>Follow Us :</p>
          <div className="hello">
            <span>© 2024 HOMEHIVE PVT. LTD.</span><br/>
            <span id='pe'>Country: India | USA | UAE</span>
          </div>
        </div>
  
        <div className="footer-container">
          <div className="icons">
            <i className="fa-brands fa-square-instagram"></i>
            <i className="fa-brands fa-square-x-twitter"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
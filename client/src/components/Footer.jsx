import React from "react";
import "../styling/homepage.css";

const Footer = () => {
  return (

      <div className="footer" style={{zIndex:"-3"}}>
        <div className="footer-grid" style={{zIndex:"-3"}}>
          <img style={{zIndex:"-2"}}
            src="https://res.cloudinary.com/farmersmarket/image/upload/v1595185287/Asset_63_id5hkc.png"
            alt="net-app-logo"
            className="footer-img netApp"
          />
        </div>
        <div>
          <img style={{zIndex:"-2"}}
            src="https://res.cloudinary.com/farmersmarket/image/upload/v1595122843/Asset_68_y7rxcp.png"
            alt="google-logo"
            className="footer-img"
          />
        </div>
      </div>
  );
};

export default Footer;

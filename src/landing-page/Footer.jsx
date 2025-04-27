import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer1">
        <div className="footertitle">
          <img src="./images/flight-icon.png" alt="" />
          TravelGo
        </div>
      </div>
      <div className="bottomfooter1">
        <div className="footer2">
        <span><b>About</b></span><br/>
         <span>About Us</span><br/>
         <span>Careers</span><br/>
         <span>Press</span><br/>
        </div>
        <div className="footer3">
        <span><b>Support</b></span><br/>
         <span>Contact Us</span><br/>
         <span>FAQs</span><br/>
         <span>Help Center</span><br/>
        </div>
        <div className="footer4">
         <span><b>Legal</b></span><br/>
         <span>Privacy Policy</span><br/>
         <span>Terms of Service</span><br/>
         <span>Cookie Policy</span><br/>
        </div>
      </div>
      <hr></hr>
      <span>&copy; 2025 Airways Inc. All rights reserved.</span>
      

    </div>
  );
};

export default Footer;

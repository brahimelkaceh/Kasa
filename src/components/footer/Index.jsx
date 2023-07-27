import React from "react";
import logo from "../../assets/LOGO1.png";
import "./style.css";
function Index() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="" />
      </div>
      <div className="copyright">
        <span>© 2020 Kasa. All rights reserved</span>
      </div>
    </div>
  );
}

export default Index;

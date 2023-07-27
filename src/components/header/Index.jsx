import React from "react";
import "./style.css";
import logo from "../../assets/LOGO.png";
import { Link } from "react-router-dom";
function Index() {
  return (
    <div className="container header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="links">
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              A propos
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Index;

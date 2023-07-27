import React from "react";
import img from "../../assets/IMG.jpg";
import { Link } from "react-router-dom";
function Box({ data }) {
  // console.log(data);
  return (
    <Link to={`/home/${data.id}`} className="box">
      <div className="img">
        <img src={data.cover} alt="image" />
      </div>
      <div className="overlay"></div>
      <div className="footer-box">
        <div className="title">
          <p>{data.title}</p>
        </div>
        <div className="location">
          <p>{data.location}</p>
        </div>
      </div>
    </Link>
  );
}

export default Box;

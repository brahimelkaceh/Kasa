import React from "react";
import Rating from "./Rating";
import Description from "./Description";
import Equipement from "./Equipement";

function ProductInfo({ data }) {
  const ratingValue = parseInt(data?.rating); // Replace this value with your actual rating
  return (
    <>
      <div className=" product-header">
        <div className="">
          <h2>{data.title}</h2>
          <h4>{data.location}</h4>
        </div>
        <div className="box-2">
          <div className="profile">
            {data?.host?.picture ? (
              <img src={data?.host?.picture} alt="profile" />
            ) : (
              <div></div>
            )}
          </div>
          <div className="profile-name">
            <p>{data?.host?.name}</p>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="tags">
          {data.tags?.map((tag, i) => (
            <p key={i}>{tag}</p>
          ))}
        </div>
        <Rating rating={ratingValue} />
      </div>
      <div className="content-container">
        <Description description={data?.description} />
        <Equipement equipement={data?.equipments} />
      </div>
    </>
  );
}

export default ProductInfo;

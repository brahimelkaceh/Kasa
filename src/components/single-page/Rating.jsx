import React from "react";

export default function Rating({ rating }) {
  const totalStars = 5;

  return (
    <div className="rating">
      {Array.from({ length: totalStars }, (_, index) => (
        <span key={index} className={index < rating ? "star filled" : "star"}>
          ★
        </span>
      ))}
    </div>
  );
}

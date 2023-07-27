import React from "react";
import Box from "./Box";
import "./style.css";

function Boxes({ data }) {
  return (
    <div className="containesr">
      <div className="boxes">
        {data.map((d) => (
          <Box key={d.id} data={d} />
        ))}
        {/* <Box data={data} /> */}
      </div>
    </div>
  );
}

export default Boxes;

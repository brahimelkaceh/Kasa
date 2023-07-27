import React, { useState } from "react";
import Hero from "../components/hero/Index";
import background from "../assets/IMG.jpg";
import Boxes from "../components/boxes/Boxes";
import jsonData from "../../db.json";
function Index() {
  const [data, setData] = useState(jsonData);
  return (
    <div className="container">
      <Hero background={background} />
      {/* <div className="overlay"></div> */}
      {data && <Boxes data={data} />}
    </div>
  );
}

export default Index;

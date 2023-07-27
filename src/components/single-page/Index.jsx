import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import jsonData from "../../../db.json";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ProductInfo from "./ProductInfo";

function Index() {
  const { id } = useParams(); // React Router version 6
  const [data, setData] = useState(jsonData);
  useEffect(() => {
    // Simulate fetching data based on the ID
    const fetchedData = data.find((item) => item.id === id);
    setData(fetchedData);
  }, [id]);

  return (
    <div className="container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data?.pictures?.map((picture, i) => (
          <SwiperSlide key={i}>
            <img className="slide-img" src={picture} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      <ProductInfo data={data} />
    </div>
  );
}

export default Index;

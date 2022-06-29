import React from "react";
import Ddata from "./DisData";
import "../NewArrival/Style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

const DisCard = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <Slider {...settings}>
        {Ddata.map((value, index) => {
          return (
            <>
              <div className="box product" key={index}>
                <div className="img_h">
                  <img src={value.cover} alt="" width="100%" />
                </div>
                <h4>{value.name}</h4>
                <span style={{ color: "red" }}>{value.price}</span>
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
};

export default DisCard;
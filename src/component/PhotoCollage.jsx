import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from "react-router-dom";
import Data from "../Data/Data";

const PhotoCollage = (prop) => {
  // const Hotel = Data.find((find) => find.id === prop.id);

  const { img, id } = prop;

  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <Slider {...setting} className=" mx-auto   w-full">
      {img.map((imageUrl, index) => (
        <div key={index}>
          <img
            src={imageUrl}
            alt=""
            className="mx-auto w-full h-64 object-cover"
          />
        </div>
      ))}
    </Slider>
  );
};

export default PhotoCollage;

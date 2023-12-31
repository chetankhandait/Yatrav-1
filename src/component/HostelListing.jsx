import React from "react";
import { Link, NavLink } from "react-router-dom";
import Data from "../Data/Data";
import PhotoCollage from "./PhotoCollage";
import Slider from "react-slick";
import { FaIndianRupeeSign, FaRupeeSign } from "react-icons/fa6";
import { FaHeart, FaHotel, FaRestroom } from "react-icons/fa";
// import SepratePage from './SepratePage';

const HotelListing = () => {
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
    <div className="flex flex-wrap flex-1 items-center justify-center  ">
      {
        // console.log(Data)
        Data.map((k) => {
          return (
            <Link to={`/detail/${k.id}`}>
              <div className="  my-2  rounded-md px-2   sm: w-[400px]  ">
                <FaHeart className="relative top-[2.05rem] left-[21.5rem] text-white z-50" />
                <img
                  src={k.dp}
                  alt=""
                  className="h-[312px] w-[321px]    rounded-md object-cover sm:h-[290px] "
                />
                {/* <PhotoCollage {...k} /> */}
                <div>
                  <ul>
                    <li className="font-bold">{k.name}</li>
                    <li className="flex items-center  ">
                      <FaHotel className="text-[#362c2c]   " />
                      {k.type}
                    </li>
                    <li>{k.rooms}</li>
                    <li className="flex items-center ">
                      <FaIndianRupeeSign />
                      {k.price}
                    </li>
                  </ul>
                </div>

                {/* <h2 className='bg-black text-slate-100 px-2 py-2 rounded-md  text-center cursor-pointer'> Know more   </h2> */}
              </div>
            </Link>
          );
        })
      }
    </div>
  );
};

export default HotelListing;

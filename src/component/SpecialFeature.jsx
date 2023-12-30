import React from "react";
import { FaHandPointRight, FaStar } from "react-icons/fa";
import { IoDiamondSharp } from "react-icons/io5";
const SpecialFeature = (k) => {
  // const element
  console.log(k.feature);
  return (
    <div className="   ">
      {k.feature.map((element, key) => (
        <div className="   ">
          <hr className="bg-black text-blue-900" />
          <div className="flex items-center py-2 ">
            <FaHandPointRight />
            <h2 className="pl-2">{element}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpecialFeature;

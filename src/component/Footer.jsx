import React from "react";
import { FaGlobe, FaRupeeSign } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="  bottom-0  w-full ">
      <div className=" flex flex-col  sm:items-center px-2 py-2 text-black font-medium ">
        <div className="flex pb-2   text-base">
          <h3 className="flex items-center ">
            {" "}
            <span>
              {" "}
              <FaGlobe />{" "}
            </span>{" "}
            English(In){" "}
          </h3>
          <h3 className="flex px-2 items-center ">
            <FaRupeeSign />
            INR
          </h3>
        </div>
        <div className="text-base">
          <h4>C 2023 Yatra,Inc.</h4>
        </div>
        <div>
          <ul className="flex text-sm gap-2 pb-4 pt-1">
            <li>Privacy</li>
            <li>Term</li>
            <li>Sitemap</li>
            <li>Comapany details</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <div className="bg-red-800 flex items-center justify-center  h-screen flex-col">
      <div className="flex flex-col ">
        <ul className="list">
          <p className="text-white font-semibold text-xl  ">
            {" "}
            Sorry Bhai , Use this payment detail instead
          </p>

          <li className="text-white font-semibold text-xl underline  ">
            4242 4242 4242 4242
          </li>
          <li className="text-white font-semibold text-xl underline  ">
            Address : 3003 street Los angles
          </li>
          <li className="text-white font-semibold text-xl underline  ">
            state : Calfornia
          </li>
          <li className="text-white font-semibold text-xl underline  ">
            Country : United States
          </li>
        </ul>
      </div>

      <Link
        to="/"
        className="underline pl-3 text-2xl  flex items-center justify-between"
      >
        <FaHome />
        Home{" "}
      </Link>
    </div>
  );
};

export default Cancel;

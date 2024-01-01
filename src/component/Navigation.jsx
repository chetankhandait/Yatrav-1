import React from "react";
import { NavLink } from "react-router-dom";
import { FaMapLocationDot } from "react-icons/fa6";

const Navigation = () => {
  return (
    <div className="flex gap-3 ">
      <NavLink to="/list">
        <h2 className="bg-black text-slate-100 px-2 py-2 rounded-md my-3 ml-12  ">
          {" "}
          List View{" "}
        </h2>
      </NavLink>
      <NavLink to="/">
        <h2 className="bg-black text-slate-100  rounded-md my-3 fixed left-[139.2px] bottom-0  text-center flex flex-col items-center justify-center p-2  z-20 sm:hidden   ">
          <FaMapLocationDot />
          Map View
        </h2>
      </NavLink>
    </div>
  );
};

export default Navigation;

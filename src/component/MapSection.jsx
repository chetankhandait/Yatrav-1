import React from "react";
import Leaflet from "./Leaflet";
import HeroSection from "./HeroSection";
import Search from "./Search";
import Filter from "./Filter";
import Navigation from "./Navigation";
import HotelListing from "./HostelListing";
import Data from "../Data/Data";
const MapSection = () => {
  return (
    <div>
      <div className="w-full  font-mooli">
        <HeroSection />
        <Search />

        <div className="w-full   p-2.5 bg-white flex gap-[5rem] mx-auto ">
          <div className="flex   flex-col  w-full">
            <Navigation />

            <Leaflet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;

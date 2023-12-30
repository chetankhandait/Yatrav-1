import Filter from "./Filter";
import HotelListing from "./HostelListing";
import Search from "./Search";
// import Data from "../Data/Data";
import React, { useState } from "react";
import HeroSection from "./HeroSection";
import Navigation from "./Navigation";
import Footer from "./Footer";
import PhotoCollage from "./PhotoCollage";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { firebaseAuth } from "../../firebase-config";
import { ImExit } from "react-icons/im";
import Topbar from "./Topbar";

const Home = () => {
  // console.log(user)
  return (
    <div>
      <div className="w-full  font-mooli">
        <Topbar />
        <HeroSection />

        <Search />

        <div className="w-full   p-2.5 bg-white flex gap-4  mx-auto ">
          <div className="flex flex-col   ">
            <Navigation />
            <div className="flex flex-wrap ">
              <div className=" absolute top-1 right-1 "></div>

              <HotelListing />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;

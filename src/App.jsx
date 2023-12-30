import React from "react";
import { Route, Routes, BrowserRouter, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import MapSection from "./component/MapSection";
import PageSnippet from "./component/PageSnippet";
import SepratePage from "./component/SepratePage";
import SignIn from "./component/SignIn";
import Signup from "./component/Signup";
import Cancel from "./component/cancel";
import Home from "/src/Component/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/list" element={<Home />} />
        <Route path="/map" element={<MapSection />} />
        <Route path="/" element={<MapSection />} />
        <Route path="/" element={<PageSnippet />} />
        <Route path="/detail/:productId" element={<SepratePage />} />

        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

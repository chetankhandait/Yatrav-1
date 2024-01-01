import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter, NavLink } from "react-router-dom";

import MapSection from "./component/MapSection";
import PageSnippet from "./component/PageSnippet";
import SepratePage from "./component/SepratePage";
import SignIn from "./component/SignIn";
import Signup from "./component/Signup";
import Cancel from "./component/Cancel";
import Home from "./component/Home";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="Loader">
      {loading ? (
        // Display the preloader while loading is true
        <div
          className="flex items-center justify-center h-screen flex-col"
          id="preloaderdiv"
        >
          <img
            src="https://i.pinimg.com/originals/4d/e8/65/4de865d02e3199e9ad2787ce6629ea18.gif"
            alt=""
            className="w-[156px]"
          />
          <h2 className="text-[28px] font-mooli font-medium">Yatra(यात्रा)</h2>
        </div>
      ) : (
        <BrowserRouter>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<Home />} />
            <Route path="/map" element={<MapSection />} />
            <Route path="/detail/:Name" element={<SepratePage />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/cancel" element={<Cancel />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;

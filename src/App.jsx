import React from "react";
// import Home from "./Component/Home";
import { Route, Routes, BrowserRouter, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import MapSection from "./component/MapSection";
import Footer from "./component/Footer";
import PageSnippet from "./component/PageSnippet";
import SepratePage from "./component/SepratePage";
import SignIn from "./component/SignIn";
import Signup from "./component/Signup";
import Cancel from "./component/cancel";
import Home from "./component/Home";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  return (
    <div className="Loader">
      {loading ? (
        // Display the preloader while loading is true
        <div
          className=" flex items-center justify-center h-screen flex-col "
          id="preloaderdiv"
        >
          <img
            src="https://i.pinimg.com/originals/4d/e8/65/4de865d02e3199e9ad2787ce6629ea18.gif"
            alt=""
            className="w-[156px]"
          />
          <h2 className="text-[28px] font-mooli font-medium">
            {" "}
            Yatra(यात्रा){" "}
          </h2>
        </div>
      ) : (
        // Render your main content when loading is false

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
          {/* <Footer /> */}
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;

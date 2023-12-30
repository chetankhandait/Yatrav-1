import { onAuthStateChanged } from "firebase/auth";
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { firebaseAuth } from "../../firebase-config";

const HeroSection = () => {
  // const [user, setUser] = useState(undefined);
  // const navigate = useNavigate();

  // onAuthStateChanged(firebaseAuth, (currentUser) => {
  //   if (currentUser) {
  //     setUser(currentUser);
  //   } else {
  //     navigate("/sign-in");
  //   }
  // });

  return (
    <div>
      <div className="flex flex-1 text-black w-[97%]  overflow-hidden p-2.5 ">
        <div className="bg-white wrounded-l-2xl w-2/3 ml-[0.6rem]">
          <nav className="flex flex-1 justify-left">
            <img
              src="https://thumbs.dreamstime.com/b/hotel-linear-icon-modern-outline-logo-concept-white-ba-background-restaurant-collection-suitable-use-web-apps-133521021.jpg"
              alt=""
              className="w-14"
            />

            <ul className="flex flex-1 gap-x-[2rem] text-right mt-2.5 mr-4.5 mb-0 ml-0 no-underline pt-0.5 pb-0.5 pr-16 pl-[4rem]">
              <li>
                <a href="/map" className="text-#181414 font-bold">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="text-#181414 font-bold">
                  Vilas
                </a>
              </li>
              <li>
                <a href="/test" className="text-#181414 font-bold">
                  Manor
                </a>
              </li>
              <li className="flex ">
                {/* <img src={user.photoURL} alt="" width={20} height={10} className='rounded-lg object-cover' /> <span>{user.displayName} </span>  */}
              </li>
            </ul>
          </nav>
          <div className="flex -mt-9 -mb-[3rem] mx-0.5 gap-5 items-center sm:">
            <h2 className="text-[3.7rem] mb-[3.9rem] my-10 mx-0.5 font-mooli font-semibold font leading-[1.1]">
              Reserve Your <br />
              Ideal Holiday
            </h2>
            <img
              src="https://1.bp.blogspot.com/-TlIRtOXmmDA/WS8Ar-jMLDI/AAAAAAAAH58/b03hdJmdDTs6j0X9d9FQOlHWAHYTJC6KQCK4B/s1600/Stock%2Bimages%2Bare%2Boften%2Bcasted%2Bwith%2Battractive%2Bpeople%2B...-790465.jpg"
              alt=""
              className=" w-[9rem] h-[8.6rem] object-cover   rounded-full my-[10px] mx-[-74px] sm:mx-[-14px] border-yellow-400   "
            />
          </div>
          <p className="pl-1 text-[1.1rem]">Let's get Aquanted!</p>
          <hr className="border-[1.2px] bg-black" />
          <div className="flex items-center gap-8 my-0 mx-1.5 mb-[1.1rem]  w-full  bg ">
            <p className="w-1/2 font-[500] font-mooli mt-[1rem] ml-[0.2rem] text-[14.3px] ">
              We specialize in curating exceptional villa rentals. providing
              unparalleled level of comfort, privacy, and convenience for
              yourdream vacation.
            </p>
            <button className="bg-black text-white py-[0.7rem] - px-[3rem] rounded-[.9rem] font-semibold cursor-pointer">
              More
            </button>
            {/* border-radius: 15px;
    padding: 0.7rem 2.35rem; */}
          </div>
          <div className="flex justify-start gap-[2.5rem] align-middle py-1 font-medium mb-[1.25rem]">
            <section className="flex flex-col mx-2.5 -my-2">
              <h2 className="font-[700] text-[1.2rem]">115k+</h2>
              <p>Capital Raised</p>
            </section>
            <section className="flex flex-col mx-2.5 -my-2">
              <h2 className="font-[700] text-[1.2rem]">70k+</h2>
              <p>Happy Customer</p>
            </section>
            <section className="flex flex-col mx-2.5 -my-2">
              <h2 className="font-[700] text-[1.2rem]">45k+</h2>
              <p>Property Option</p>
            </section>
          </div>
          {/* <button className="absolute text-black -bottom-16 bg-transparent left-5 border font-medium px-3 py-1 text-sm">Popular</button> */}
          <img
            src="https://th.bing.com/th/id/OIP.4W6SERqnLGe_KVYyvNEgSgHaE8?pid=ImgDet&rs=1"
            alt=""
            className="w-80 h-44 "
          />
        </div>

        <div className="hidden    md:block">
          {/* <button className="absolute right-24 top-7 rounded-2xl py-2 px-4 bg-white font-semibold  ">
            Contact Us{" "}
          </button> */}
          <div className=" h-20 relative  border-white"></div>
          <p className="   sm:absolute bottom-24 text-white w-4/12 right-56 ">
            Enjoy a luxurious Melbourne vacation in a villa with breathtaking
            city views and easy access to the vibrant city life and culinary
            delights.
          </p>

          <img
            src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww&w=1000&q=80"
            alt=""
            className=" mx-0.5 -my-20 h-full object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

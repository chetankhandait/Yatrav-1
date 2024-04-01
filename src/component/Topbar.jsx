import React, { useState } from "react";
import { firebaseAuth } from "../../firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ImExit } from "react-icons/im";

const Topbar = () => {
  const [user, setUser] = useState(undefined);
  const navigate = useNavigate();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) {
      setUser(currentUser);
    } else {
      navigate("/sign-in");
    }
  });
  const defaultProfileImage = "/images/default.png"; // Add the path to your default image
  return (
    <div className="bg-white py-4 w-full h-16 fixed    flex   justify-between  gap-5   z-30 font-semibold    ">
      <img
        src="https://thumbs.dreamstime.com/b/hotel-linear-icon-modern-outline-logo-concept-white-ba-background-restaurant-collection-suitable-use-web-apps-133521021.jpg"
        alt=""
        className="w-14 object-cover pt-2"
      />

      {user && (
        <>
          <div className="flex  justify-end items-center mr-3  ">
            <div className="flex gap-1  items-center   ">
              <img
                src={user?.photoURL || defaultProfileImage}
                alt="User Profile"
                className="h-[1.95rem] object-cover rounded-full    "
              />
              <button
                className=" text-center    "
                onClick={() => signOut(firebaseAuth)}
              >
                <ImExit className=" text-center " />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Topbar;

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

  return (
    <div className="bg-white py-4 w-full h-16 fixed flex  justify-end mb-11  gap-[27rem] z-30 font-semibold">
      <img
        src="https://thumbs.dreamstime.com/b/hotel-linear-icon-modern-outline-logo-concept-white-ba-background-restaurant-collection-suitable-use-web-apps-133521021.jpg"
        alt=""
        className="w-14 object-cover pt-2"
      />
      <div className="translate-x-1/2 px-2 ">यात्रा(Yatra )</div>
      {user && (
        <>
          <div className="flex  justify-end items-center mr-10  ">
            <div className="flex gap-5 items-center ">
              <p className="  text-sm font-normal "> {user.displayName}</p>
              <img
                src={user?.photoURL}
                alt="User Profile"
                className="h-11 object-cover rounded-full    "
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

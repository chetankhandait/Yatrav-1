import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { firebaseAuth } from "../../firebase-config";
import { FaGoogle, FaRegUser } from "react-icons/fa";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, Setpassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(firebaseAuth, provider);
      // Access user data from the result if needed
      // const user = result.user;
      console.log(result.user);
    } catch (error) {
      console.log(error);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  const [item, setItem] = useState("");
  const handleItemclic = (index) => {
    setItem(index);
  };
  return (
    <div className=" w-100% bg-[#f5deb3]   h-screen  text-center  sm:flex   ">
      <div className=" w-full  md:w-1/2">
        <section className="w-full  bg-blue-400 py-6">
          <h2 className="py-1 text-2xl font-semibold text-white flex items-center justify-center ">
            <FaRegUser />
            Login
          </h2>
        </section>
        <section className=" flex flex-col mx-auto items-center justify-between px-3  py-4 ">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md shadow-sm  my-3 px-2 py-2"
          />

          <input
            type="password"
            placeholder=" Confirm Password"
            value={password}
            onChange={(e) => Setpassword(e.target.value)}
            className="w-full rounded-md shadow-sm  my-3 px-2 py-2"
          />
          <div className="button">
            <button
              className="w-full bg-blue-900 text-white p-2 rounded-md mb-2 hover:bg-blue-600 "
              onClick={handleSignIn}
            >
              Sign In
            </button>
            <button
              className=" w-full shadow-2xl my-2 p-4  flex items-center  justify-center hover:bg-green-200 font-medium "
              onClick={handleGoogleSignIn}
            >
              <img src="src/assets/search.png" alt="" className="h-4 pr-2" />
              Sign in with Google
            </button>
            <span className=""> Create an account?</span>
            <Link to="/sign-up" className="text-blue-700 underline pl-2">
              Sign up
            </Link>
          </div>
        </section>
      </div>
      <img src="src/assets/hotel.jpg" alt="" className="hidden   md:block" />
    </div>
  );
};

export default SignIn;

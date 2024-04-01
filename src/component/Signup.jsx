import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
// import { initializeApp } from "firebase/app";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { firebaseAuth } from "../../firebase-config";
import { FaClipboard, FaLiraSign, FaList } from "react-icons/fa";
import { toast } from "react-toastify";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
      toast.success("Account created successfully ");
    } catch (error) {
      console.log(error);
      toast.error("Plese enter valid details");
    }
  };

  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(firebaseAuth, provider);
      // Access user data from the result if needed
      // const user = result.user;
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <div className=" w-100%   h-screen  text-center bg-black sm:flex    ">
      <div className=" w-full   md:1/2   ">
        <section className="w-full  bg-blue-400 py-6 px-8  ">
          <h2 className="py-1 text-2xl font-semibold text-white flex items-center justify-center gap-1  ">
            <FaClipboard />
            Signup
          </h2>
        </section>
        <section className=" flex flex-col mx-auto items-center justify-between px-3  py-4   bg-black">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md shadow-sm bg-black text-white border border-white my-3 px-2 py-2 font-normal"
          />

          <input
            type="text"
            placeholder="Username"
            className="w-full rounded-md shadow-sm bg-black text-white border border-white my-3 px-2 py-2 font-normal"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-md shadow-sm bg-black text-white border border-white my-3 px-2 py-2 font-normal"
          />
          <input
            type="password"
            placeholder=" Confirm Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md shadow-sm bg-black text-white border border-white my-3 px-2 py-2 font-normal"
          />
          <div className="button">
            <button
              className="w-full bg-white  text-black p-2 rounded-md mb-2 hover:scale-105 transition-all ease-out"
              onClick={handleSignup}
            >
              Sign up
            </button>
            <button
              className="bg-white rounded-md w-full shadow-2xl my-2 p-4  flex items-center  justify-center hover:"
              onClick={handleGoogleSignup}
            >
              <img src="/images/search.png" alt="" className="h-4 pr-2" />
              Sign up with Google
            </button>
            <span className="text-white">Already have an account?</span>
            <Link to="/sign-in" className="text-blue-700 underline pl-2">
              Login
            </Link>
          </div>
        </section>
      </div>
      <img src="/images/hotel.jpg" alt="" className="hidden md:block" />
    </div>
  );
};

export default Signup;

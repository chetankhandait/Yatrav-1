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
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, Setpassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      toast.success("Sign in Successfull ");
    } catch (error) {
      console.log(error);
      toast.error("Sign in failed.please chekc your email and password");
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(firebaseAuth, provider);

      // Access user data from the result if needed
      const user = result.user;
      toast.success(`hello ${user.displayName}`);
    } catch (error) {
      console.log(error);
      toast.error("Sign in failed.please chekc your email and password");
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) {
      navigate("/");
    }
  });

  return (
    <div className=" w-100% bg-black  h-screen  text-center  sm:flex   ">
      <div className=" w-full  md:w-1/2">
        <section className="w-full  bg-blue-400 py-6">
          <h2 className="py-1 text-2xl font-semibold text-white flex items-center justify-center ">
            <FaRegUser />
            Login
          </h2>
        </section>
        <section className=" flex flex-col mx-auto items-center justify-between px-3  py-4 gap-4 bg-black">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md shadow-sm bg-black text-white border border-white my-3 px-2 py-2 font-normal"
          />

          <input
            type="password"
            placeholder=" Confirm Password"
            value={password}
            onChange={(e) => Setpassword(e.target.value)}
            className="w-full rounded-md shadow-sm bg-black text-white border border-white my-3 px-2 py-2 font-normal"
          />
          <div className="button">
            <button
              className="w-full bg-white  text-black p-2 rounded-md mb-2 hover:scale-105 transition-all ease-out "
              onClick={handleSignIn}
            >
              Sign In
            </button>
            <button
              className=" bg-white rounded-md w-full shadow-2xl my-2 p-4  flex items-center  justify-center hover:   "
              onClick={handleGoogleSignIn}
            >
              <img src="/images/search.png" alt="" className="h-4 pr-2" />
              Sign in with Google
            </button>
            <span className="text-white"> Create an account?</span>
            <Link to="/sign-up" className="text-blue-500 underline pl-2">
              Sign up
            </Link>
          </div>
        </section>
      </div>
      <img src="/images/hotel.jpg" alt="" className="hidden   md:block" />
    </div>
  );
};

export default SignIn;

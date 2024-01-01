import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Data from "../Data/Data";
import BottomBar from "./BottomBar";
import Leaflet from "./Leaflet";
import HotelMAp from "./HotelMAp";
import PhotoCollage from "./PhotoCollage";
import { IoIosWifi } from "react-icons/io";
import { PiTelevisionSimple } from "react-icons/pi";
import { FaHome, FaRestroom, FaRupeeSign, FaWater } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Masonry from "react-masonry-css";
import DateComponent from "./DateComponent";
import Footer from "./Footer";
import SpecialFeature from "./SpecialFeature";
import { FaLessThan } from "react-icons/fa6";
import { LuAlarmClockOff } from "react-icons/lu";
import { firebaseAuth } from "../../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import ReviewSection from "./ReviewSection";
import { loadStripe } from "@stripe/stripe-js";

const SepratePage = () => {
  const { productId } = useParams();
  const Hotel = Data.find((find) => find.id === productId);
  const { ...x } = Hotel;
  const [user, setUser] = useState(undefined);
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const [isLoading, setLoading] = useState(false);

  const increment = () => {
    setValue(value + 1);
  };
  const decrement = () => {
    if (value > 0) setValue(value - 1);
  };
  // console.log(value);

  const [day, setDaydiffence] = useState("0");
  const products = [{ name: x.name, price: x.price, date: day, guest: value }];
  // console.log(day);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate("/sign-in");
      }
    });

    // Cleanup the subscription when the component is unmounted
    return () => unsubscribe();
  }, [navigate]);
  const [selectedDate, setSelectedDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleDateChange = (startDate, endDate) => {
    // Convert the dates to UTC format
    const utcStartDate = new Date(startDate.toUTCString());
    const utcEndDate = new Date(endDate.toUTCString());

    // Calculate the time difference in milliseconds
    const timeDifference = utcEndDate - utcStartDate;

    // Calculate the number of days
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    console.log("Number of days:", daysDifference);

    setSelectedDate({ startDate, endDate });
    setDaydiffence(daysDifference);
  };

  const breakpointCol = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };
  const { ...date } = selectedDate;
  //backend data procedure

  const makePayment = async () => {
    setLoading(true);
    try {
      const stripe = await loadStripe(
        "pk_test_51OSFPgSE08OvuMJOjiiOvikRQOEd1rjH0IV2UeunFNqpRv7gDvU0JW5i1Ab3ph8nD5kraOfg1GmZDBGfNDnBnQdb00kTRgUDyB"
      );

      const body = {
        product: products,
      };
      const headers = {
        "Content-Type": "application/json",
      };
      const response = await fetch(
        "https://yatra-backend-a04j.onrender.com/api/create-checkout-session",
        {
          method: "POST",
          headers: headers,
          body: JSON.stringify(body),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const session = await response.json();
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error(result.error);
      }
    } catch (error) {
      console.error("Error making payment:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col  text-left gap-3 w-full overflow-hidden  sm:gap-5 text-base   ">
      <div className="  sm:hidden        ">
        <PhotoCollage {...Hotel} />
      </div>

      <Masonry
        breakpointCols={breakpointCol}
        className="  hidden sm:flex   w-auto  bg-[#d8d8d8]  "
        columnClassName="gridkliye "
      >
        {x.img.map((key, index) => (
          <img src={key} key={index} />
        ))}
      </Masonry>

      <Link
        to="/"
        className=" absolute underline left-1 top-1  text-white   lg:hidden"
      >
        <FaLessThan />
      </Link>

      <div className="flex flex-col px-4 gap-3 sm:px-6 ">
        <section className="flex flex-col gap-2 sm:gap-6">
          <h3 className="text-3xl font-[700]  ">{x.name}</h3>

          <h3 className="text-gray-600">{x.capicaty}</h3>
          <h3 className="flex gap-2 items-center font-semibold">
            <FaStar /> {x.review}
            {" ."}
            <span className="underline"> {x.reviewCount} reviews </span>
          </h3>
        </section>
        <div className=" sm:flex justify-between  ">
          <SpecialFeature feature={x.Feature} />
          <hr className="bg-black text-blue-900" />
          <section className="w-full sm:w-1/2 bg-gray-200   rounded-md my-3 p-3    ">
            {x.description}
          </section>
        </div>
        <hr className="bg-black text-blue-900" />

        <div className="flex  flex-col md:flex-row justify-between my-5    ">
          <ul className=" text-lg sm:text-xl flex flex-col gap-3 ">
            <h3>What this place Offer </h3>
            <li className="flex items-center gap-2 pt-2">
              <IoIosWifi className="text-blue-800" />
              Wifi
            </li>
            <li className="flex items-center gap-2 pt-2">
              <PiTelevisionSimple className="text-blue-800" />
              Tv
            </li>
            <li className="flex items-center gap-2 pt-2">
              <FaRestroom className="text-blue-800" />
              Indoor FirePlace{" "}
            </li>
            <li className="flex items-center gap-2 pt-2">
              <FaWater className="text-blue-800" />
              CArbon Monoxide alarm{" "}
            </li>
            <li className="flex items-center gap-2 pt-2">
              <LuAlarmClockOff className="text-blue-800" />
              Smoke alarm{" "}
            </li>
          </ul>
          <div className=" hidden sm:flex w-[42%] gap-2 font-semibold flex-col  shadow-md  rounded-md  px-2 my-6 pt-1    ">
            <h3 className="text-3xl flex items-center gap-1">
              {" "}
              <FaRupeeSign />
              {x.price} <span className="text-base">/night</span>{" "}
            </h3>
            <h3 className="text-lg">
              No of days : <span className="text-gray-500"> {day}</span>{" "}
            </h3>
            <div>
              <DateComponent onDateChange={handleDateChange} />
            </div>
            <div className="flex gap-5 items-center">
              <h1 className="">
                {" "}
                Guest : <span className="text-gray-500">{value}</span>{" "}
              </h1>
              <div className="flex gap-3 items-center ">
                <button
                  onClick={increment}
                  className="bg-blue-600 rounded-full  w-7 h-7 text-white hover:bg-blue-400"
                >
                  +
                </button>{" "}
                <button
                  onClick={decrement}
                  className="bg-blue-600 rounded-full  w-7 h-7  text-white hover:bg-blue-400 "
                >
                  -{" "}
                </button>
              </div>
            </div>

            <button
              onClick={makePayment}
              className={`bg-blue-700 text-white font-semibold p-3 w-1/2 mx-auto rounded-md mt-2 mb-4 hover:bg-blue-400 ${
                isLoading ? "opacity-50 cursor-not-allowed" : "" // Disable button and change opacity when loading
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Submit"}
            </button>
          </div>
        </div>

        <hr className="bg-black text-blue-900" />
        <BottomBar price={x.price} selectedDate={day} name={x.name} />

        <section className="flex flex-col w-full sm:w-1/3 justify-start gap-2 bg-gray-200  p-2 rounded-md  ">
          {/* hotel owner  */}
          <div className="flex items-center  justify-between ">
            <h4 className=" ">
              {" "}
              Hosted by{" "}
              <span className="font-semibold underline">{x.owner}</span>{" "}
            </h4>
            <img
              src={x.ownerImg}
              className="h-12 rounded-full w-12 object-cover mx-2  my-2  "
            />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="flex gap-2 items-center">
              {" "}
              <FaStar /> 420 review{" "}
            </h3>
            <h3 className="flex gap-2 items-center">
              {" "}
              <FaStar /> Identify verified{" "}
            </h3>
            <h3 className="flex gap-2 items-center">
              {" "}
              <FaStar /> Super host{" "}
            </h3>
          </div>
        </section>
        <hr className="bg-black text-blue-900" />
        <div className=" ">
          <HotelMAp location={x.geocode} />
        </div>
        <div className="sm:hidden">
          <DateComponent onDateChange={handleDateChange} />
        </div>
        <hr className="bg-black text-blue-900" />
        <div className="flex items-center justify-center flex-1 ">
          <img
            src="https://a0.muscache.com/pictures/ec500a26-609d-440f-b5d0-9e5f92afd478.jpg"
            className="w-11"
            alt=""
          />
          <h2 className="text-2xl  ">{x.review}</h2>
          <img
            src="https://a0.muscache.com/pictures/65bb2a6c-0bdf-42fc-8e1c-38cec04b2fa5.jpg"
            className="w-11"
            alt=""
          />
        </div>
        <hr className="bg-black text-blue-900" />
        <ReviewSection review={x.reviewText} />
      </div>
      <div className="pb-12">
        <Footer />
      </div>
    </div>
  );
};

export default SepratePage;

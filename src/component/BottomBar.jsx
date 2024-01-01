import { loadStripe } from "@stripe/stripe-js";
import { ka } from "date-fns/locale";
import { useState } from "react";
import { FaHome, FaRupeeSign } from "react-icons/fa";

const BottomBar = (k) => {
  const [isloading, setIsloading] = useState(false);
  console.log(k.data);
  const [value, setValue] = useState(0);
  const increment = () => {
    setValue(value + 1);
  };
  const decrement = () => {
    if (value > 0) setValue(value - 1);
  };

  const products = [
    { name: k.name, price: k.price, date: k.selectedDate, guest: value },
  ];
  const makePayment = async () => {
    setIsloading(true);
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
      setIsloading(false);
    }
  };

  return (
    <div className="fixed bottom-0 flex flex-row  justify-between w-full -mx-[10px]     p-3 z-10  font-medium text-[15px] bg-white   sm:hidden   ">
      {/* <hr className="bg-black text-blue-900 sm:hidden   " /> */}
      <div className="flex flex-col items-start justify-center w-full ">
        <h3 className="flex items-center">
          <FaRupeeSign />
          {k.price}
        </h3>
        <div className="flex ">
          <h3> No of Days : {k.selectedDate} </h3>
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
        </div>
      </div>
      <button
        onClick={makePayment}
        className={`bg-blue-700 text-white font-semibold p-3 w-1/2 mx-auto rounded-md mt-2 mb-4 hover:bg-blue-400 ${
          isloading ? "opacity-50 cursor-not-allowed" : "" // Disable button and change opacity when loading
        }`}
        disabled={isloading}
      >
        {isloading ? "Loading..." : "Submit"}
      </button>
    </div>
  );
};

export default BottomBar;

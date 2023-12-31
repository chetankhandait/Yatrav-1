import { loadStripe } from "@stripe/stripe-js";
import { FaHome } from "react-icons/fa";

const BottomBar = (k) => {
  const { startDate, endDate } = k.selectedDate;

  const makePayment = async () => {
    try {
      const stripe = await loadStripe(
        "pk_test_51OSFPgSE08OvuMJOjiiOvikRQOEd1rjH0IV2UeunFNqpRv7gDvU0JW5i1Ab3ph8nD5kraOfg1GmZDBGfNDnBnQdb00kTRgUDyB"
      );

      const body = {
        product: k.data,
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
    }
  };

  return (
    <div className="fixed bottom-0 flex flex-row  justify-between w-full   pl-2  p-3 z-10  font-medium text-[15px] bg-white sm:hidden   ">
      <hr className="bg-black text-blue-900 sm:hidden   " />
      <div className="flex flex-col items-start justify-center w-full ">
        <h3>${k.price}</h3>
        <div className="flex">
          <h2> {startDate.toDateString()} </h2> <span>-</span>
          <h2> {endDate ? endDate.toDateString() : "not selected"} </h2>
        </div>
      </div>
      <button
        className="px-2 mx-2 bg-purple-600 rounded-md flex items-center gap-1   text-white font-semibold"
        onClick={makePayment}
      >
        <FaHome />
        Reserve
      </button>
    </div>
  );
};

export default BottomBar;

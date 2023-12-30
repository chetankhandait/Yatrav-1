import React from "react";

const Filter = () => {
  return (
    <div className=" hidden   bg-white w-[30%]  md:flex flex-col  ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d29342.650284903655!2d79.95026387233318!3d23.17635700461899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3981a8d6aaaaaaad%3A0xfad1b073dfb80ffd!2sJabalpur%20Engineering%20College%2C%20Gokulpur%2C%20Jabalpur%2C%20Madhya%20Pradesh!3m2!1d23.1910103!2d79.98704599999999!4m5!1s0x3981afa9b9e22fad%3A0xadcfbce6589ad012!2sTaj%20Hotel%2C%20Renj%20Office%20Chowk%20Ukwa%2C%20Madhya%20Pradesh%20482001!3m2!1d23.1620121!2d79.9584398!5e0!3m2!1sen!2sin!4v1696445218350!5m2!1sen!2sin"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="w-full"
      />
      <h2 className="font-sans font-semibold">Filter By:</h2>
      <h2>YourBudget (Per Night) </h2>
      <input
        type="range"
        min="$100"
        max="russian"
        aria-className="p-1"
        aria-valuetext="100"
        className="w-[78%] mx-auto"
      />

      <div className="mt-[1.2rem] ml-1.5">
        <input
          type="checkbox"
          name="Book Without Credit card"
          id=""
          className="p-1"
        />
        <label htmlFor="" className="pl-2">
          Book without Credit card
        </label>
      </div>
      <div className="mt-[1.2rem] ml-1.5">
        <input
          type="checkbox"
          name="Book Without Credit card"
          id=""
          className="p-1"
        />
        <label htmlFor="" className="pl-2">
          Hotels
        </label>
      </div>
      <div className="mt-[1.2rem] ml-1.5">
        <input
          type="checkbox"
          name="Book Without Credit card"
          id=""
          className="p-1"
        />
        <label htmlFor="" className="pl-2">
          No Prepayment
        </label>
      </div>

      <div className="mt-[1.2rem] ml-1.5">
        <input
          type="checkbox"
          name="Book Without Credit card"
          id=""
          className="p-1"
        />
        <label htmlFor="" className="pl-2">
          5 star{" "}
        </label>
      </div>
    </div>
  );
};

export default Filter;

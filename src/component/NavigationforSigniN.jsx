import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavigationforSigniN = () => {
  const item = ["signin", "signup"];
  const [selectedItem, setSelectedItem] = useState(null);
  const handleClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div>
      <section className="bg-blue-500 flex  justify-evenly items-center py-6 ">
        {item.map((item, index) => (
          <h3
            key={index}
            onClick={() => handleClick(index)}
            className={` bg-green-500 ${
              selectedItem === index ? "bg-blue-500" : "bg-gray-200"
            }p-2 m-1`}
          >
            {item}
          </h3>
        ))}
      </section>
    </div>
  );
};

export default NavigationforSigniN;

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendar, FaArrowRight } from "react-icons/fa";

const CustomDatePickerInput = ({ value, onClick }) => (
  <div className="relative">
    <input
      type="text"
      value={value}
      onClick={onClick}
      className="white   "
      placeholder="Select a date"
    />
    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
      <FaCalendar />
    </div>
  </div>
);

const DateComponent = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSubmit = () => {
    onDateChange(startDate, endDate);
  };

  return (
    <>
      <div className="flex">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          showPopperArrow={false}
          customInput={<CustomDatePickerInput />}
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          showPopperArrow={false}
          customInput={<CustomDatePickerInput />}
        />
      </div>
      <div className="bg-yellow-200 flex items-center p-3 gap-2 font-semibold rounded-md text-[14px] md:bg-gray-100 justify-between   ">
        <FaCalendar />
        {startDate.toDateString()} <FaArrowRight />{" "}
        {endDate ? endDate.toDateString() : "..."}
        <button
          onClick={handleSubmit}
          className="bg-blue-700 py-3 rounded-md text-white font-semibold text-xs w-28 p-2 hover:bg-blue-400"
        >
          Set <span>date</span>
        </button>
      </div>
    </>
  );
};

export default DateComponent;

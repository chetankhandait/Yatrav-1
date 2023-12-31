import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ReviewComponent = (review) => {
  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.1,
    slidesToScroll: 1,
  };
  // console.log(review.review);
  const [reviews, setReviews] = useState(review.review);

  const [newReview, setNewReview] = useState({
    author: "",
    content: "",
    rating: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
  };

  const handleRatingChange = (rating) => {
    setNewReview((prevReview) => ({
      ...prevReview,
      rating: rating,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedReviews = [
      ...reviews,
      { ...newReview, id: reviews.length + 1 },
    ];
    setReviews(updatedReviews);
    setNewReview({ author: "", content: "", rating: 0 });
  };

  return (
    <div className="flex flex-col items-center py-5 my-3 sm:   ">
      <h2>Product Reviews</h2>
      <div className="w-full       sm:hidden ">
        <Slider
          {...setting}
          className=" flex flex-col justify-center  rounded-md px-4 shadow-md text-left  mb-3   "
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className=" shadow-lg w-1/2 px-2  h-[11rem] rounded-md border-gray-500"
            >
              <p className="flex items-center text-xs pt-2  justify-center pb-2   ">
                {" "}
                {Array.from({ length: review.rating }).map((_, index) => (
                  <FaStar key={index} />
                ))}
              </p>

              <p className="pl-6 pb-2 translate-x-3 pr-2">{review.content}</p>
              <p className="pl-6 translate-x-3 text-blue-700  ">
                {" "}
                {review.author}
              </p>
            </div>
          ))}
        </Slider>
      </div>
      <div className="hidden sm:flex flex-wrap gap-4 mx-auto items-center justify-center  ">
        {reviews.map((review) => (
          <div
            key={review.id}
            className=" shadow-lg w-[36.266667%] pl-2 h-[10rem] rounded-lg border-gray-500 "
          >
            <p className="flex items-center text-xs pt-2  justify-center pb-2   ">
              {" "}
              {Array.from({ length: review.rating }).map((_, index) => (
                <FaStar key={index} />
              ))}
            </p>

            <p className="pl-6 pb-2 text-base   ">{review.content}</p>
            <p className="pl-6 text-base font-semibold text-blue-700">
              {" "}
              {review.author}
            </p>
          </div>
        ))}
      </div>
      <h3 className="py-3 px-2 font-semibold ">Add Your Review</h3>
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col  sm:w-2/3 mx-auto     "
      >
        <label className="flex  flex-col  items-start font-semibold gap-2 ">
          Author:
          <input
            type="text"
            name="author"
            value={newReview.author}
            onChange={handleInputChange}
            className="bg-[#dddad5]  rounded-md shadow-sm p-1 text-gray-800 w-full"
            placeholder="your name "
          />
        </label>
        <br />
        <label className="flex items-center gap-2 font-semibold">
          Rating:
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              onClick={() => handleRatingChange(index + 1)}
              style={{
                cursor: "pointer",
                color: index < newReview.rating ? "orange" : "gray",
              }}
            />
          ))}
        </label>
        <br />
        <label className="flex  flex-col items-start font-semibold gap-2 text-gray-800 ">
          Review:
          <textarea
            name="content"
            value={newReview.content}
            onChange={handleInputChange}
            className="p-2 shadow-xl rounded-md bg-[#dddad5] w-full  h-40     "
            placeholder="write here"
          />
        </label>
        <br />
        <button
          type="submit"
          onClick={() => toast("Review Summited!")}
          className="bg-blue-600 text-white p-2 rounded-md  mx-auto w-full "
        >
          Submit Review
          <ToastContainer />
        </button>
      </form>
    </div>
  );
};

export default ReviewComponent;

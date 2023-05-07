import React, { useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import { HiChevronRight } from "react-icons/hi";
import PaymentGetway from "../Paymentgatway/PaymentGetway";

const MovieInfo = ({ movies, genres }) => {
  const language = movies.spoken_languages?.map(({ name }) => name).join(",");
  const [isOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <PaymentGetway isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex flex-col items-start gap-1 text-white">
        <div className="py-4  border-b-2 border-gray-300 ">
          <h1 className="text-2xl font-bold">{movies.original_title}</h1>
        </div>
        <div className="flex flex-col items-start gap-4 my-2">
          <div className="flex items-start gap-2">
            <BsFillStarFill
              className="text-red-500"
              style={{ fontSize: "30px" }}
            />
            <h3 className="text-md font-semibold flex  mt-1">
              {movies.vote_average} Votes <HiChevronRight className="mt-1.5" />
            </h3>
          </div>

          <h3 className="px-2 py-1 tracking-wide bg-gray-200 rounded-sm text-md font-semibold text-black">
            {language}
          </h3>
          <h3>
            {movies.runtime} min || {genres} || UA
          </h3>
        </div>
        <div>
          <button
            className="bg-red-500 text-center px-6 mt-1 py-3 rounded-md"
            type="button"
            onClick={openModal}
          >
            Book Tickets
          </button>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;

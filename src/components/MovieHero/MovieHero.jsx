import React, { useContext, useState } from "react";
import { dataContext } from "../../context/Contextapi";
import MovieInfo from "./MovieInfo";
import { BsFillStarFill } from "react-icons/bs";
import { HiChevronRight } from "react-icons/hi";
import PaymentGetway from "../Paymentgatway/PaymentGetway";

const MovieHerosm = () => {
  const { movies } = useContext(dataContext);
  const genres = movies.genres?.map(({ name }) => name).join(",");
  const language = movies.spoken_languages?.map(({ name }) => name).join(",");
  const [isOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <PaymentGetway isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex flex-col gap-1 m-2">
        <div className="w-full h-full">
          <div className="w-full h-full ">
            <img
              src={`https://image.tmdb.org/t/p/original${movies.poster_path}`}
              alt="Poster_image"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 mx-20 border-b-2">
          <div className="py-2 border-b-2 border-gray-300 ">
            <h1 className="text-2xl font-bold">{movies.original_title}</h1>
          </div>
          <div className="flex flex-col items-start gap-2 my-2">
            <div className="flex items-start gap-2">
              <BsFillStarFill
                className="text-red-500"
                style={{ fontSize: "30px" }}
              />
              <h3 className="text-md font-semibold flex  mt-1">
                {movies.vote_average} Votes{" "}
                <HiChevronRight className="mt-1.5" />
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
              className="bg-red-500 text-center text-white px-6 mt-1 py-3 rounded-md mb-2"
              type="button"
              onClick={openModal}
            >
              Book Tickets
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const MovieHeroLg = () => {
  const { movies } = useContext(dataContext);
  const genres = movies.genres?.map(({ name }) => name).join(",");
  return (
    <>
      <div className="relative w-full " style={{ height: "28rem" }}>
        <div
          className="absolute z-10 w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(34,34,34) 24.95%, rgb(34,34,34) 38.2%, rgba(34,34,34,0.03) 97.47%, rgb(34, 34, 34) 100%)",
          }}
        >
          <div className="absolute top-8 left-24 z-30 flex items-center gap-6">
            <div className="h-96 w-60 ">
              <img
                src={`https://image.tmdb.org/t/p/original${movies.poster_path}`}
                alt="Poster_image"
                className="w-full h-full object-cover object-center rounded-md"
              />
            </div>

            <div>
              <MovieInfo movies={movies} genres={genres} />
            </div>
          </div>
          <div style={{ height: "28rem" }}>
            <img
              src={`https://image.tmdb.org/t/p/original${movies.backdrop_path}`}
              alt="background_img"
              className="w-full h-full object-cover object-center opacity-60"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const MovieHero = () => {
  return (
    <>
      <div className="2xl:flex xl:flex lg:flex md:flex sm:hidden moviehero_lg">
        <MovieHeroLg />
      </div>
      <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:flex moviehero_sm">
        <MovieHerosm />
      </div>
    </>
  );
};

export default MovieHero;

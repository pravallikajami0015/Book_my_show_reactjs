import React, { useContext, useEffect } from "react";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../components/HeroCarousel/Arrow";
import MovieLayout from "../layout/MovieLayout";
import { dataContext } from "../context/Contextapi";
import { useParams } from "react-router-dom";
import { SiBookmyshow } from "react-icons/si";
import { FaCcApplePay } from "react-icons/fa";
import axios from "axios";
import Cast from "../components/Cast&Crew/Cast";
import Crew from "../components/Cast&Crew/Crew";
import Posterslider from "../components/PosterSlider/Posterslider";
import MovieHero from "../components/MovieHero/MovieHero";

const Moviespage = () => {
  const { id } = useParams();
  const {
    movies,
    setmovies,
    cast,
    setCast,
    similarMovies,
    setSimilarMovies,
    crew,
    setCrew,
  } = useContext(dataContext);

  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(
        `movie/${id}/credits?api_key=3cdb69147733566d54992f899dfb0c9c`
      );
      setCast(getCast.data.cast);
    };
    requestCast();
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    const requestCrew = async () => {
      const getCrew = await axios.get(
        `movie/${id}/credits?api_key=3cdb69147733566d54992f899dfb0c9c`
      );
      setCrew(getCrew.data.crew);
    };
    requestCrew();
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    const requestSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(
        `movie/${id}/recommendations?api_key=3cdb69147733566d54992f899dfb0c9c`
      );
      setSimilarMovies(getSimilarMovies.data.results);
    };
    requestSimilarMovies();
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    const movieDetail = async () => {
      const getMovieDetail = await axios.get(
        `movie/${id}?api_key=3cdb69147733566d54992f899dfb0c9c`
      );
      setmovies(getMovieDetail.data);
    };
    movieDetail();
    // eslint-disable-next-line
  }, [id]);

  console.log("crew", crew);

  const settingsCast = {
    infinite: false,
    slidesToShow: 7,
    slidesToScroll: 4,
    arrows: true,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
    ],
  };

  const movieSettings = {
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 4,
    arrows: true,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
    ],
  };

  return (
    <>
      <h1>
        <MovieHero />
      </h1>

      <div className="container my-10  w-3/4  mx-20">
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-2xl  font-bold text-gray-800">About Movies</h3>
          <p className=" text-gray-800 text-start 2xl:text-md xl:text-md lg:text-md md:text-sm sm:text-sm about_movie_text ">
            {movies.overview}
          </p>
        </div>

        <div className="my-10">
          <hr />
        </div>
        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Applicable Offers
          </h2>
          <div className="flex flex-col gap-3 lg:flex-row ">
            <div className="flex items-start gap-2 bg-red-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8 text-red-500">
                <SiBookmyshow className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">
                  Make it a delicious Movie day
                </h3>
                <p className="text-gray-600">Tap to view details</p>
              </div>
            </div>

            <div className="flex items-start gap-2 bg-red-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcApplePay className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">Film Pass</h3>
                <p className="text-gray-600">Tap to view details</p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-10">
          <hr />
        </div>

        <div className="my-2">
          <h3 className="text-2xl text-black text-bold mb-3">Cast</h3>
          <Slider {...settingsCast} className="flex flex-row items-start ">
            {cast.map((cast, index) => (
              <Cast
                Image={cast.profile_path}
                castName={cast.original_name}
                role={cast.character}
                key={index}
              />
            ))}
          </Slider>
        </div>

        <div className="my-2">
          <h3 className="text-2xl text-black text-bold mb-3">Crew</h3>
          <Slider {...settingsCast}>
            {crew.map((crewData, index) => (
              <Crew
                image={crewData.profile_path}
                crewName={crewData.original_name}
                job={crewData.job}
                key={index}
              />
            ))}
          </Slider>
        </div>

        <div className="my-10">
          <hr />
        </div>

        <div className="my-2">
          <Posterslider
            config={movieSettings}
            title="Similar Moives"
            posters={similarMovies}
            isDark={false}
          />
        </div>
      </div>
    </>
  );
};

export default MovieLayout(Moviespage);

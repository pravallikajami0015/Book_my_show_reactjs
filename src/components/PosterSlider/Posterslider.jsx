import React from "react";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../HeroCarousel/Arrow";
import Poster from "../Poster/Poster";

const Posterslider = ({ title, subTilte, posters, isDark, config }) => {
  const settings = {
    infinite: false,
    slidesToShow: 6,
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
  return (
    <>
      <div>
        <h1
          className={`text-2xl font-bold ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h1>
        <h4
          className={`text-sm py-1 ${isDark ? "text-white" : "text-gray-500"}`}
        >
          {subTilte}
        </h4>
        <div className="py-2">
          {config && (
            <Slider {...config}>
              {posters.map((item, index) => (
                <Poster {...item} isDark={isDark} key={index} />
              ))}
            </Slider>
          )}
          {!config && (
            <Slider {...settings}>
              {posters.map((item, index) => (
                <Poster {...item} isDark={isDark} key={index} />
              ))}
            </Slider>
          )}
        </div>
      </div>
    </>
  );
};

export default Posterslider;

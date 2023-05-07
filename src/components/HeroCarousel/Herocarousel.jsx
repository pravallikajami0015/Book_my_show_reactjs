import React, { useState } from "react";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../HeroCarousel/Arrow";
import "../../css/Style.css";

const Herocarousel = () => {
  const [sliderImages, setSliderImages] = useState([
    {
      id: 610150,
      backdrop_path:
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1679929905642_vibinwebahmd.jpg",
    },
    {
      id: 985939,
      backdrop_path:
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1677493393240_web.jpg",
    },
    {
      id: 240599,
      backdrop_path:
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1675080138999_web.jpg",
    },
    {
      id: 21196,
      backdrop_path:
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1679570207589_kkrr.jpg",
    },
  ]);
  console.log(setSliderImages);
  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className="sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
        <Slider {...settings}>
          {sliderImages.map((image, index) => {
            return (
              <div style={{ width: "100%" }} key={index}>
                <img
                  src={image.backdrop_path}
                  alt="Carousel slider"
                  className="rounded-md object-center w-full h-60"
                />
              </div>
            );
          })}
        </Slider>
      </div>

      <div className="lg:hidden md:block sm:hidden xl:hidden 2xl:hidden sliderMd">
        <Slider {...settings}>
          {sliderImages.map((image, index) => {
            return (
              <div style={{ width: "100%" }} key={index}>
                <img
                  src={image.backdrop_path}
                  alt="Carousel slider"
                  className="rounded-md  object-center w-full h-72"
                />
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="sm:hidden md:hidden lg:block xl:block 2xl:block  sliderLg">
        <Slider {...settings}>
          {sliderImages.map((image, index) => {
            return (
              <div style={{ width: "100%" }} key={index}>
                <img
                  src={image.backdrop_path}
                  alt="Carousel slider"
                  className="rounded-md object-center w-full h-80"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Herocarousel;

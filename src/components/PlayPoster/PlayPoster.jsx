import React from "react";

const PlayPoster = (props) => {
  return (
    <>
      <a
        href="https://in.bookmyshow.com/events/so-rude-of-me-by-swati-sachdeva/ET00331405"
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex flex-col gap-3 my-2">
          <div className="h-72 2xl:h-72 xl:h-72 lg:h-64 md:h-64 sm:h-52">
            <img
              src={props.src}
              alt="poster"
              className="w-full h-full object-cover object-center rounded-md"
            />
          </div>
          <h3 className="text-lg text-gray-700">{props.title}</h3>
        </div>
      </a>
    </>
  );
};

export default PlayPoster;

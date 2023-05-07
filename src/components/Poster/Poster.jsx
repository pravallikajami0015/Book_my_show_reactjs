import React from "react";
import { Link } from "react-router-dom";
import "../../css/Style.css";

const Poster = (props) => {
  return (
    <>
      <Link to={`/movie/${props.id}`}>
        <div className="flex flex-col items-start cursor-pointer ">
          <div className="w-48 md:w-44 sm:w-36 poster_width">
            <img
              src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
              alt="poster_img"
              className="w-full h-full rounded-lg object-center"
            ></img>
          </div>
          <h3
            className={`${
              props.isDark ? "text-white" : "text-gray-600"
            } font-bold`}
            style={{ fontSize: "15px" }}
          >
            {props.title}
          </h3>
        </div>
      </Link>
    </>
  );
};

export default Poster;

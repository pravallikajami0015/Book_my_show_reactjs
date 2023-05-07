import React from "react";
import MovieNavbar from "../components/Navbar/MovieNavbar";

const MovieLayout =
  (Component) =>
  ({ ...props }) => {
    return (
      <>
        <MovieNavbar />
        <Component {...props} />
      </>
    );
  };

export default MovieLayout;

import React, { createContext, useState } from "react";

export const dataContext = createContext(null);

const Contextapi = ({ children }) => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlinestreamEvents, setOnlinestreamEvents] = useState([]);
  const [movies, setmovies] = useState({});
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);

  return (
    <>
      <dataContext.Provider
        value={{
          recommendedMovies,
          setRecommendedMovies,
          premierMovies,
          setPremierMovies,
          onlinestreamEvents,
          setOnlinestreamEvents,
          movies,
          setmovies,
          cast,
          setCast,
          similarMovies,
          setSimilarMovies,
          crew,
          setCrew,
        }}
      >
        {children}
      </dataContext.Provider>
    </>
  );
};

export default Contextapi;

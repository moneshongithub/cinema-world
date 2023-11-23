import React from "react";
import HomeCards from "./HomeCard";

const HomeDisplay = (props) => {
  let { movies} = props;
  // console.log(movies);
  return (
    <>
      <div className="flex flex-wrap justify-center py-10 px-5">
        {movies.map((movie) => {
          return <HomeCards key={movie.id} MovieCard={movie} />;
        })}
      </div>
    </>
  );
};

export default HomeDisplay;
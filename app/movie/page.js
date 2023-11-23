import MovieDisplay from "@/components/display/Moviedisplay";
// import SearchDisplay from "@/components/display/SearchDisplay";
// import HomeFilter from "@/components/filter/HomeFilter";
// import SearchBar from "@/components/searchbar/SearchBar";
import MoviesTitle from "@/components/title/MoviesTitle";
import React from "react";
// import { useDebounce } from "use-debounce";
async function getData() {
  const apiKey = process.env.API_KEY;

  try {
    const resp = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=1`
    )
    if (!resp.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await resp.json();
    let res = data.results;
    return res;

  } catch (error) {
    handle(error)
    throw error
  }
 
  
}

const Movies = async () => {
  const moviedata = await getData();

  return (
    <div className=" h-auto">
      <MoviesTitle />
      {/* <SearchBar />
      <HomeFilter /> */}
      <MovieDisplay movies={moviedata} />
    </div>
  );
};

export default Movies;

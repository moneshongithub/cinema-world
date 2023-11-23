import React from "react";
import ImageCard from "../display/ImageCard";
import MovieDetails from "./MovieDetails";
import YouTube from "react-youtube";

const MovieInfo = (props) => {
  let {MovieDetail,genreArr,id}=props
  // const apiKey = process.env.API_KEY;
  return (
    <div>
      <div className="flex flex-row flex-wrap place-content-center items-center mb-10 mt-5">
        <ImageCard MovieDetail={MovieDetail} />
        <MovieDetails MovieDetail={MovieDetail} genreArr={genreArr} />
      </div>
      <div className="pt-2 pb-8 flex justify-center">
        <iframe
          className="w-4/5 aspect-video"
          src={"https://autoembed.to/movie/tmdb/" + id}
          // src={"https://api.themoviedb.org/3/ + id"}
          // src={"https://api.themoviedb.org/3/movie/297762/videos?process.env.API_KEY" + id}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
        ></iframe>
        {/* <button className="p-3 border border-gray-50 ">play trailer</button> */}


      </div>
    </div>
  );
};

export default MovieInfo;

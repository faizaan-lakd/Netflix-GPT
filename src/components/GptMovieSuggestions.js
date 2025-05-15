import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { gptMovieNames, gptMovieResults } = useSelector((store) => store.gpt);

  if (!gptMovieNames) return null;

  return (
    <div className="p-2 text-white">
      {gptMovieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={gptMovieResults[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;

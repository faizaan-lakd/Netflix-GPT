import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
// import client from "../utils/openai";
import { API_OPTIONS, SEARCH_MOVIE_TMDB_API } from "../utils/constants";
import { addGptMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMoviesTMDB = async (movieName) => {
    const data = await fetch(SEARCH_MOVIE_TMDB_API + movieName, API_OPTIONS);
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    // const gptQuery =
    //   "Act as a Movie Recommendation system and suggest some movies for the query : " +
    //   searchText.current.value +
    //   ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    // const gptResult = await client.chat.completions.create({
    //   model: "gpt-3.5-turbo",
    //   messages: [{ role: "user", content: gptQuery }],
    // });

    // const gptMovies = gptResult.choices?.[0]?.message?.content.split(",");

    // Since API not active, dummy gptMovies below.
    const gptMovies = [
      "Andaz Apna Apna",
      "Hera Pheri",
      "Chupke Chupke",
      "Jaane Bhi Do Yaaro",
      "Padosan",
    ];

    const promiseArray = gptMovies.map((movie) => searchMoviesTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovies({ gptMovieNames: gptMovies, gptMovieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="py-3 px-5 m-3 mr-0 rounded-l-full col-span-9 text-lg focus:outline-none"
        />
        <button
          className="col-span-3 m-3 py-3 px-3 ml-0 bg-red-700 text-white text-lg font-semibold rounded-r-full"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

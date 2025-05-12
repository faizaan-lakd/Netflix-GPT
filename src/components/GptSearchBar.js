import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 grid grid-cols-12">
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="py-3 px-5 m-3 mr-0 rounded-l-full col-span-9 text-lg focus:outline-none"
        />
        <button className="col-span-3 m-3 py-3 px-3 ml-0 bg-red-700 text-white text-lg font-semibold rounded-r-full">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

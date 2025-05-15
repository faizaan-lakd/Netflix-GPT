import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[15%] px-[5%] absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-sm md:text-3xl font-bold">{title}</h1>
      <p className="max-sm:hidden py-4 w-1/3 text-justify">{overview}</p>
      <p className="md:hidden text-xs py-5 w-2/5 text-justify">
        {overview.length > 60 ? `${overview.slice(0, 60)}...` : overview}
      </p>
      <div>
        <button className="bg-white text-black max-sm:text-sm py-1 md:p-2 px-5 md:px-10 font-semibold rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className="mx-2 bg-gray-500 text-white max-sm:text-sm py-1 md:p-2 px-5 md:px-10 font-semibold rounded-lg  bg-opacity-50 hover:bg-opacity-40">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[15%] px-[5%] absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-4 w-1/3 text-justify">{overview}</p>
      <div>
        <button className="bg-white text-black p-2 px-10 font-semibold rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-2 px-10 font-semibold rounded-lg  bg-opacity-50 hover:bg-opacity-40">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

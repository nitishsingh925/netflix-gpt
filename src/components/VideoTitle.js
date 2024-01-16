import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-screen aspect-video pt-48 px-12 text-white  bg-gradient-to-tr from-black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 w-4/12">{overview}</p>
      <div>
        <button className=" text-black bg-white p-2 px-6 rounded-xl hover:opacity-80">
          ▶ Play
        </button>
        <button className="bg-slate-500 bg-opacity-30 mx-5 p-2 px-6  rounded-lg hover:opacity-80">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

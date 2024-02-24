import React from "react";

const ProjectCard = ({
  img_url,
  title,
  about,
  live_link,
  github_link,
  video_link,
}) => {
  return (
    <div className="w-96 rounded-lg border border-black p-2 m-2">
      <img src={img_url} alt="project-img" className="w-full h-72 rounded-lg" />
      <p className="p-2 mt-2 mx-2 font-semibold text-lg">{title}</p>
      <p className="p-2 text-sm">{about}</p>
      <div className="flex flex-wrap justify-around">
        <button className="p-4 m-2 hover:bg-red-600 bg-red-500 rounded-2xl text-white text-sm">
          <a href={live_link} rel="noreferrer" target="_blank">
            Live App Link
          </a>
        </button>
        <button className="p-4 m-2 hover:bg-red-600 bg-red-500 rounded-2xl text-white text-sm">
          <a href={video_link} rel="noreferrer" target="_blank">
            Watch Video
          </a>
        </button>
        <button className="p-4 m-2 bg-red-500 hover:bg-red-600 rounded-2xl text-white text-sm">
          <a href={github_link} rel="noreferrer" target="_blank">
            Github Link
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;

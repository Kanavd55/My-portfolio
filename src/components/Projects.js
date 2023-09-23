import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="w-10/12 mx-auto mt-16" id="projects">
        <p className="text-center text-gray-700 text-lg">Browse my recent</p>
        <p className="text-center text-gray-700 text-2xl underline mb-8">Projects</p>
    <div className="flex flex-wrap justify-around">
      <ProjectCard
      img_url="/FoodieSpot.png"
        title="Foodie's-Spot"
        about="Foodie's Spot is a responsive food ordering web app which uses Swiggy's live public api data to fetch restaurant details.It has shimmer UI for better user experience, conditional rendering,react top loader bar,lazy loading and react-hot-toast for notifications."
        github_link="https://github.com/Kanavd55/Food-Ordering-App/"
        live_link="https://foodiespot-kanav.netlify.app/"
        video_link="https://www.youtube.com/watch?v=_lgWKtnEho4"
      />
      <ProjectCard
      img_url="/CineUniverse.png"
        title="CineUniverse"
        about="CineUniverse: Your go-to source for trending movies, top-rated films, and hot TV shows. Explore, search, and watch trailers effortlessly with our user-friendly interface, powered by the reliable TMDB API. Dive into the world of entertainment today!"
        github_link="https://github.com/Kanavd55/CineUniverse"
        live_link="https://cineuniverse-kanav.netlify.app/"
        video_link="https://www.youtube.com/watch?v=d5K4lEkuJik&t=93s"
      />
    </div>
    </div>
  );
};

export default Projects;

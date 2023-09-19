import React, { useEffect, useState } from "react";
import {
  Css_logo,
  Git_logo,
  Github_Api_Url,
  Html_logo,
  Java_logo,
  Javascript_logo,
  Linux_logo,
  React_logo,
  Sql_logo,
  Tailwind_logo,
} from "../utils/constants";

const About = () => {
  const [user, setUser] = useState();

  const getUserDetails = async () => {
    const data = await fetch(Github_Api_Url);
    const json = await data.json();
    setUser(json);
  };

  useEffect(() => {
    getUserDetails();
  }, []);
  return (
    <div className="w-10/12 mx-auto mt-28" id="about">
      <div className="flex flex-wrap justify-center w-full">
        <div className="w-96">
          {user && (
            <img
              src={user.avatar_url}
              className="rounded-full h-80 mx-auto"
              alt="user-avatar-img"
            />
          )}
        </div>
        <div className="w-96 p-3 flex items-center">
          <div className="mx-auto text-lg">
            <div className="text-center text-gray-700 mt-1 px-2 text-lg">
              Hi, I'm
            </div>
            <div className="text-3xl mt-1 text-center px-2 font-bold">
              Kanav Gopal Dahat
            </div>
            <div className="text-center font-semibold mt-1 px-2 text-lg">
              System Engineer
            </div>
            <div className="flex justify-center mt-3">
              <a
                href={require("../assets/Resume.pdf")}
                download="Kanav's Resume"
                className="rounded-2xl p-2 text-sm border hover:bg-black hover:text-white border-black m-2"
              >
                Download CV
              </a>
              <button className="rounded-2xl p-2 text-sm border  hover:bg-black hover:text-white border-black m-2">
                Contact Info
              </button>
            </div>
            <div className="flex flex-wrap justify-around mt-3">
              <div className="text-center text-sm m-2 font-semibold">
                <img className="w-8 mx-3" src={Html_logo} alt="Html_logo" />
                <span>Html</span>
              </div>
              <div className="text-center text-sm m-2 font-semibold">
                <img className="w-8 mx-3" src={Css_logo} alt="Css_logo" />
                <span>Css</span>
              </div>
              <div className="text-center text-sm m-2 font-semibold">
                <img
                  className="w-8 mx-3"
                  src={Javascript_logo}
                  alt="Javascript_logo"
                />
                <span>Javascript</span>
              </div>
              <div className="text-center text-sm m-2 font-semibold">
                <img className="w-8 mx-3" src={React_logo} alt="React_logo" />
                <span>React</span>
              </div>
              <div className="text-center text-sm m-2 font-semibold">
                <img
                  className="w-8 mx-3"
                  src={Tailwind_logo}
                  alt="Tailwind_logo"
                />
                <span>Tailwind Css</span>
              </div>
              <div className="text-center text-sm m-2 font-semibold">
                <img className="w-8 mx-3" src={Git_logo} alt="Git_logo" />
                <span>Git</span>
              </div>
              <div className="text-center text-sm m-2 font-semibold">
                <img className="w-8 mx-3" src={Java_logo} alt="Java_logo" />
                <span>Core Java</span>
              </div>
              <div className="text-center text-sm m-2 font-semibold">
                <img className="w-8 mx-3" src={Sql_logo} alt="Sql_logo" />
                <span>Sql</span>
              </div>
              <div className="text-center text-sm m-2 font-semibold">
                <img className="w-8 mx-3" src={Linux_logo} alt="Linux_logo" />
                <span>Linux</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

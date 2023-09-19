import React, { useEffect, useState } from "react";

const About = () => {
  const [user, setUser] = useState();

  const getUserDetails = async () => {
    const data = await fetch("https://api.github.com/users/Kanavd55");
    const json = await data.json();
    setUser(json);
  };

  useEffect(() => {
    getUserDetails();
  }, []);
  return (
    <div className="w-10/12 mx-auto mt-28">
    <div className="flex flex-wrap justify-center w-full">
      <div className="w-96">
   {user && (<img
          src={user.avatar_url}
          className="rounded-full h-80 mx-auto"
          alt="user-avatar-img"
        />)}
      </div>
      <div className="w-96 p-3 flex items-center">
        <div className="mx-auto text-lg">
          <div className="text-center text-gray-700 mt-1 px-2 text-lg">Hi, I'm</div>
          <div className="text-3xl mt-1 text-center px-2 font-bold">
            Kanav Gopal Dahat
          </div>
          <div className="text-center font-semibold mt-1 px-2 text-lg">System Engineer</div>
          <div className="flex justify-center mt-3">
            <a href={require("../utils/Resume.pdf")} download="Kanav's Resume" className="rounded-2xl p-2 text-sm border hover:bg-black hover:text-white border-black m-2">Download CV</a>
            <button className="rounded-2xl p-2 text-sm border  hover:bg-black hover:text-white border-black m-2">Contact Info</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;

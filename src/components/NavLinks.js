import React from "react";
import { Link } from "react-scroll";

const NavLinks = () => {
  return (
    <>
        <Link activeClass="active"
      to="about"
      spy={true}
      smooth={true}
      duration={500}
      isDynamic={true}><li className="my-2 mx-4 p-2 cursor-pointer hover:text-gray-500 ">
          About
        </li></Link>
        <Link activeClass="active"
      to="education"
      spy={true}
      smooth={true}
      duration={500}
      delay={500}
      isDynamic={true}><li className="my-2 mx-4 p-2 cursor-pointer hover:text-gray-500 ">
          Education
        </li></Link>
        <Link activeClass="active"
      to="work"
      spy={true}
      smooth={true}
      duration={500}
      isDynamic={true}><li className="my-2 mx-4 p-2 cursor-pointer hover:text-gray-500 ">
          Work
        </li></Link>
        <Link activeClass="active"
      to="projects"
      spy={true}
      smooth={true}
      duration={500}
      isDynamic={true}><li className="my-2 mx-4 p-2 cursor-pointer hover:text-gray-500 ">
          Projects
        </li></Link>
        <Link activeClass="active"
      to="contact"
      spy={true}
      smooth={true}
      duration={500}
      isDynamic={true}><li className="my-2 mx-4 p-2 cursor-pointer hover:text-gray-500 ">
          Contact
        </li></Link>
      </>
  );
};

export default NavLinks;

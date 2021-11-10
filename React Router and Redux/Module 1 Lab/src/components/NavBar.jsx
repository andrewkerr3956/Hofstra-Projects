import React from "react";
import NavTab from "./NavTab.jsx";

const NavBar = () => {
  return (
    <div>
      <NavTab to="/about" label="About" />
      <NavTab to="/resume" label="Resume" />
      <NavTab to="/projects" label="Projects" />
      <NavTab to="/contact" label="Contact" />
      <NavTab to="/upcoming_projects" label="Upcoming Projects" />
      <NavTab to="/github" label="GitHub" />
    </div>
  );
};

export default NavBar;

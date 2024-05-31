import React from "react";
import projectArray from "../../data/projectData";
import "./projects.css";
import Slider from "../Slider";

const Projects = () => {  
  return (
    <div className="projects">
      <h2>Projects</h2>
      <Slider items={projectArray} />
    </div>
  );
};

export default Projects;

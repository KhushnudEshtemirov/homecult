import React, { useState } from "react";
import RequestModal from "../../components/request-modal/RequestModal";

import { projects } from "./project.data";

import "./projects.scss";

const Projects = () => {
  const [showRequest, setShowRequest] = useState(false);

  const toggleRequest = () => {
    setShowRequest(!showRequest);
  };

  return (
    <div className="projects-page">
      <p>OUR PROJECTS</p>
      <div className="categories">
        <div className="category-menu">
          <ul>
            <li className="active">ALL</li>
            <li>RESEDENTIAL</li>
            <li>COMMERCIAL</li>
          </ul>
        </div>
        <div className="category-body">
          {projects.map((project) => (
            <div
              className={`image-container ${project.large ? "large" : ""} ${
                project.middle ? "middle" : ""
              } ${project.small ? "small" : ""}`}
              key={project.id}
            >
              <img src={project.imgUrl} alt="category" />
              <p>{project.title.toUpperCase()}</p>
              <div className="project-footer">
                <span>{project.country.toUpperCase()}</span>
                <span>{project.measure.toUpperCase()}</span>
                <span>{project.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="have-idea">
        <p>
          HAVE AN IDEA? <br /> TELL US
        </p>
        <div className="request" onClick={toggleRequest}>
          DROP REQUEST
        </div>
      </div>
      <div className="footer">
        <span>&copy; 2019. All rights reserved.</span>
        <span>Made by Khushnud Eshtemirov</span>
      </div>
      <RequestModal toggleRequest={toggleRequest} showRequest={showRequest} />
    </div>
  );
};

export default Projects;

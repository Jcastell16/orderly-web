import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import details from "../../../styles/details.css"

const Projects = ({ project }) => {
  return (
    <>
      <div className="m-2">
        <Link
          to={`/workspace/${project.id}`}
          className="btn btn-primary rounded project"
        >
          <i className="fas fa-project-diagram fa-2x pt-2"></i>
        </Link>
         <span className="ms-2">{project.name}</span>
      </div>
    </>
  );
};

export default Projects;

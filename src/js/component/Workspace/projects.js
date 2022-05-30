import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import details from "../../../styles/details.css"

const Projects = ({ project }) => {
  return (
    <>
    <div class="list-group mx-4">
        <Link
          to={`/workspace/${project.id}`}
          className="btn btn-md list-group-item list-group-item-action list-group-item-primary shadow-lg border-0 d-flex align-self-stretch mb-3">
          <i className="fas fa-project-diagram my-2 mx-2"></i>
          <h5 className="ms-2">{project.name}</h5>
        </Link>
        
      </div>
    </>
  );
};

export default Projects;

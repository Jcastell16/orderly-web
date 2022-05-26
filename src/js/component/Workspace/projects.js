import React, { useState, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";

const Projects = ({project}) => {
    


  return (
    <>
      <div className="d-flex justify-content-between">
        <Link to={`/workspace/${project.id}`} className="btn btn-outline-primary">
          {project.name}
        </Link> 
      </div>
    </>
  );
};

export default Projects;

import React, { useState, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";

const Projects = ({project}) => {
  const { actions } = useContext(Context);
  return (
    <>
      <div className="d-flex justify-content-between">
        <Link to={`/workspace/${project.id}`} className="btn btn-outline-primary" onClick={() => actions.getColumn(project.id)}>
          {project.name}
        </Link> 
      </div>
    </>
  );
};

export default Projects;

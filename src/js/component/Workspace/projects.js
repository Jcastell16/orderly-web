import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import details from "../../../styles/details.css";

const Projects = ({ project }) => {
  return (
    <>
        <Link to={`/workspace/${project.id}`} className="d-flex text-decoration-none">
          <img
            src="https://luna1.co/82896d.png"
            style={{ width: "60px", height:"60px" }}
          />
          <p
            style={{
              marginTop: "20px",
              marginBottom: "0px",
              paddingLeft: "16px",
              paddingBottom: "10px",
            }}
          >
            <span className="text-dark">{project.name}</span>
          </p>
        </Link>
    </>
  );
};

export default Projects;

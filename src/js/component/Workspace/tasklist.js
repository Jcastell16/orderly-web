import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";

const Taslist = ({task}) => {


  return (
    <>
        <li className="list-group-item">{task.name}
        {task.priority == "Alta" ? (<span className="badge bg-danger">{task.priority}</span>): ""}
        {task.priority == "Media" ? (<span className="badge rounded-pill bg-warning text-dark">{task.priority}</span>): ""}
        {task.priority == "Baja" ? (<span className="badge rounded-pill bg-info text-dark">{task.priority}</span>): ""}
        </li>
    </>
  );
};

export default Taslist;

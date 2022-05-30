import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";

const Taslist = ({task}) => {


  return (
    <>
        <li className="list-group-item bg-light">{task.name}
        {task.priority == "Alta" ? (<label className="badge bg-danger mx-3">{task.priority}</label>): ""}
        {task.priority == "Media" ? (<label className="badge rounded-pill bg-warning text-dark mx-3">{task.priority}</label>): ""}
        {task.priority == "Baja" ? (<label className="badge rounded-pill bg-info text-dark mx-3">{task.priority}</label>): ""}
        </li>
    </>
  );
};

export default Taslist;

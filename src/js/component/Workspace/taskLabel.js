import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import { PruebaModal } from "./pruebaModal";

export const Tasklabel = ({task, item}) => {
    const [updateTask, setUpdateTask]= useState({
        title: task.name,
        content: ""
    })
    const [update, setUpdate]= useState("")
    const {store, actions}= useContext(Context)
    const handleUpdateTask = (id)=>{
        console.log(id)
        setUpdate(id)
    }
    
    return (
        <>
            <div className="card shadow-lg border border-light mb-3" style={{ "maxWidth": "18rem" }} >
                <div className="card-header d-flex align-items-center justify-content-between bg-transparent border-0">
                    
                    <h5 className="card-title">{task.name}</h5>
                   <div>
                    <button type="button" className="btn btn-outline-dark border-0" data-bs-toggle="modal" data-bs-target="#modal-card"><i className="fas fa-pencil-alt" onClick={()=>handleUpdateTask(task.id)} ></i></button>
                    <button type="button" className="btn-close text-reset fs-6" onClick={()=>actions.deleteTask(task.id)}></button>                   
                   </div>
                   
                </div>
                
                <div className="card-body">
                    <h5 className="card-title">Success card title</h5>
                    <p className="card-text">{task.description}</p>
                </div>
                <div className="card-footer d-flex align-items-center justify-content-between bg-transparent border-0">
                    <button type="button" className="btn btn-outline-dark border-0" data-bs-toggle="modal" data-bs-target="#modal-card"><i className="fas fa-user-plus"></i></button>
                    <span className="card-title me-3">Due-date</span>
                </div>
            </div>
            <PruebaModal task={update}/>
        </>
    );
};

import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";

export const Tasklabel = ({task, item}) => {
    const [updateTask, setUpdateTask]= useState({
        title: "",
        content: ""
    })
    const {store, actions}= useContext(Context)
    console.log(item)
    return (
        <>
            <div className="card shadow-lg border border-light mb-3" style={{ "maxWidth": "18rem" }} >
                <div className="card-header d-flex align-items-center justify-content-between bg-transparent border-0">
                    
                    <h5 className="card-title">{task.name}</h5>
                   <div>
                    <button type="button" className="btn btn-outline-dark border-0" data-bs-toggle="modal" data-bs-target="#modal-card"><i className="fas fa-pencil-alt"></i></button>
                    <button type="button" className="btn-close text-reset fs-6" onClick={()=>actions.deleteTask(task.id)}></button>                   
                   </div>
                   
                </div>
                <div className="modal fade" id="modal-card" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <input name="title" onChange={(event)=> setUpdateTask({...updateTask, [event.target.name]: event.target.value})} placeholder="title task"></input>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <h6>Description :</h6>
                                <input name="content" onChange={(event)=> setUpdateTask({...updateTask, [event.target.name]: event.target.value})} placeholder="content task"></input>
                                <div>
                                    <br />
                                    <h6>Members :</h6>
                                    <select className="form-select" aria-label="Default select example" id="select-type"></select>
                                </div>
                                <div>
                                    <br />
                                    <h6>Selection priority :</h6>
                                    <select className="form-select" aria-label="Default select example" id="select-type"></select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                    Close
                                </button>
                                <button type="button" className="btn btn-success" onClick={()=>actions.handleUpdateTask(updateTask,)}>
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Success card title</h5>
                    <p className="card-text">task content</p>
                </div>
                <div className="card-footer d-flex align-items-center justify-content-between bg-transparent border-0">
                    <button type="button" className="btn btn-outline-dark border-0" data-bs-toggle="modal" data-bs-target="#modal-card"><i className="fas fa-user-plus"></i></button>
                    <span className="card-title me-3">Due-date</span>
                </div>
            </div>
        </>
    );
};

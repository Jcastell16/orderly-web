import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";

export const Tasklabel = ({ task, item }) => {
    const { actions, store } = useContext(Context)
    const [updateTask, setUpdateTask] = useState({
        task_id: task.id,
        title: "",
        content: "",
        priority: ""
    })
    console.log(store.modalTask)
    
    return (
        <>
            {task.columntask_id == item.id ? (
                <div className="card shadow-lg border border-light mb-3" style={{ "maxWidth": "18rem" }} >
                    <div className="card-header d-flex align-items-center justify-content-between bg-transparent border-0">
                        <h5 className="card-title">{task.name}</h5>
                        <div>
                            <button type="button" className="btn btn-outline-dark border-0" data-bs-toggle="modal" data-bs-target="#modal-card" onClick={() => actions.handleModalTasks(task.id)}><i className="fas fa-pencil-alt"></i></button>
                            <button type="button" className="btn-close text-reset fs-6" onClick={() => actions.deleteTask(task.id)}></button>
                        </div>
                    </div>
                    {store.tasks.map((task)=>(
                    <div className="modal fade" id="modal-card" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                {task.name.length != "" ? (
                                    <h5 type="text" className="text-center title-col form-control-lg mb-2 border-0">{task.name}</h5>
                                    ) : (
                                    <input type="text" name="title" className="text-center title-col bg-light form-control-lg border-0" onChange={(event) => setUpdateTask({ ...updateTask, [event.target.name]: event.target.value })} placeholder="Ingresa Titulo"></input>
                                    )}
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <h6>Description :</h6>
                                    <input type="text" name="content" className="text-center title-col bg-light form-control-lg border-0" onChange={(event) => setUpdateTask({ ...updateTask, [event.target.name]: event.target.value })} placeholder="content task"></input>
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
                                    <button type="button" className="btn btn-success" onClick={() => actions.handleUpdateTask(item.id, updateTask.task_id, updateTask.title, updateTask.content, updateTask.priority)} data-bs-dismiss="modal">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                    <div className="card-body">
                        <h5 className="card-title">Success card title</h5>
                        <p className="card-text">task content</p>
                    </div>
                    <div className="card-footer d-flex align-items-center justify-content-between bg-transparent border-0">
                        <button type="button" className="btn btn-outline-dark border-0"><i className="fas fa-user-plus"></i></button>
                        <span className="card-title me-3">Due-date</span>
                    </div>
                </div>
            ) : (
                <h1>add task</h1>)}
        </>
    );
};
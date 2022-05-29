import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import { PruebaModal } from "./pruebaModal";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

export const Tasklabel = ({task}) => {
    const [updateTask, setUpdateTask] = useState({
        name: task.name,
        description: task.description,
        id: task.id,
        due_date: "",
        priority: task.priority,
        members: []


    })
    const { store, actions } = useContext(Context)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const save =()=>{
        handleClose();
        actions.handleUpdateTask(updateTask);
    }


    return (
        <>
            <div className="card shadow-lg border border-light mb-3" style={{ "maxWidth": "18rem" }} >
                <div className="card-header d-flex align-items-center justify-content-between bg-transparent border-0">

                    <h5 className="card-title">{task.name}</h5>
                    <div>
                        {/* <button type="button" className="btn btn-outline-dark border-0" data-bs-toggle="modal" data-bs-target="#modal-card"><i className="fas fa-pencil-alt" onClick={()=>handleUpdateTask(task.id)} ></i></button> */}
                        <Button variant="outline-dark" onClick={handleShow}>
                        <i className="fas fa-pencil-alt"></i>
                        </Button>
                        <button type="button" className="btn-close text-reset fs-6 ms-2" onClick={() => actions.deleteTask(task.id)}></button>
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

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <input name="name" onChange={(event) => setUpdateTask({ ...updateTask, [event.target.name]: event.target.value })} placeholder={updateTask.name}></input>
                </Modal.Header>
                <Modal.Body>
                    <h6>Description :</h6>
                        <input name="description" onChange={(event) => setUpdateTask({ ...updateTask, [event.target.name]: event.target.value })} placeholder="content task"></input>
                    <br/>
                    <br/>
                    <h6>Members :</h6>
                        <select className="form-select" aria-label="Default select example" id="select-type"></select>
                    <br/>
                    <h6>Selection priority :</h6>
                        <select className="form-select" aria-label="Default select example" id="select-type" name="priority" value={updateTask.priority} onChange={(event)=>setUpdateTask({...updateTask, [event.target.name]: event.target.value})}>
                            <option defaultValue></option>
                            <option value="Alta"> Alta </option>
                            <option value="Media"> Media </option>
                            <option value="Baja"> Baja </option>
                        </select>
                    <br/>
                    <h6>Due date</h6>
                    <div className="input-group date" id="datepicker">
                              <DatePicker
                                className="form-control form-outline flex-fill mb-0"
                                wrapperClassName="datePicker"
                                dateFormat='dd-MM-yyyy'
                                selected={updateTask.due_date}
                                onChange={(date) =>
                                  setUpdateTask({ ...updateTask, due_date: date })
                                }
                              />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={save}>
                        Save Changes
                    </Button>
                    {/* <Button variant="primary" onClick={()=>actions.handleUpdateTask(updateTask)}>
                        Prueba
                    </Button> */}
                </Modal.Footer>
            </Modal>
        </>
    );
};

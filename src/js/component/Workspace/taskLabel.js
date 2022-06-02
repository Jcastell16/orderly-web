import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import moment from "moment";

export const Tasklabel = ({ task, item }) => {
    const [updateTask, setUpdateTask] = useState({
        name: task.name,
        description: task.description,
        id: task.id,
        due_date: "",
        priority: task.priority,
        members: []
    })
    const [member, setMember]= useState({
        id: ""
    })
    const { store, actions } = useContext(Context)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const save = () => {
        handleClose();
        actions.handleUpdateTask(updateTask);
    }


    return (
        <>
            {task.columntask_id == item.id ? (
                <div className="card shadow-lg border border-light mb-3" style={{ "maxWidth": "18rem" }} >
                    <div className="card-header d-flex align-items-center justify-content-between bg-transparent border-0">

                        <h5 className="card-title">{task.name}</h5>
                        <div>
                            <Button variant="outline-dark" onClick={handleShow}>
                                <i className="fas fa-pencil-alt"></i>
                            </Button>
                            <button type="button" className="btn-close text-reset fs-6 ms-2" onClick={() => actions.deleteTask(task.id)}></button>
                        </div>
                    </div>
                    <div className="card-body">
                        <p className="card-text ps-3">{task.description}</p>
                    </div>
                    <div className="card-footer d-flex align-items-center justify-content-between bg-transparent border-0">
                        {task.priority == "Alta" ? (
                        <h6 className="badge rounded-pill bg-danger text-dark mx-3">{task.priority}</h6>
                        ) : task.priority == "Media" ? (
                        <h6 className="badge rounded-pill bg-warning text-dark mx-3">{task.priority}</h6>
                        ) : task.priority == "Baja" ? (
                        <h6 className="badge rounded-pill bg-info text-dark mx-3">{task.priority}</h6>
                        ): ""}
                        <span className="card-title ms-5">{moment(task.due_date).utc().format('YYYY-MM-DD')}</span>
                    </div>
                </div>
            ) : (
                "")}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <div className="d-flex flex-column">
                        <h6>Titulo:</h6>
                        <div className="form-outline flex-fill mb-0">
                        <input className="form-control" name="name" onChange={(event) => setUpdateTask({ ...updateTask, [event.target.name]: event.target.value })} placeholder={updateTask.name}></input>
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex flex-column">
                    <h6>Descripción :</h6>
                    <div className="form-outline flex-fill mb-0">
                    <input className="form-control" name="description" onChange={(event) => setUpdateTask({ ...updateTask, [event.target.name]: event.target.value })} placeholder="Descripcion"></input>
                    </div>
                    </div>
                    <br />
                    <br/>
                    <h6>Seleccione prioridad :</h6>
                    <select className="form-select" aria-label="Default select example" id="select-type" name="priority" value={updateTask.priority} onChange={(event) => setUpdateTask({ ...updateTask, [event.target.name]: event.target.value })}>
                        <option defaultValue></option>
                        <option value="Alta"> Alta </option>
                        <option value="Media"> Media </option>
                        <option value="Baja"> Baja </option>
                    </select>
                    <br />
                    <h6>Fecha Fin</h6>
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
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={save}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
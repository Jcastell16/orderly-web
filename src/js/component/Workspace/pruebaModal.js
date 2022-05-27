import React, { useState,useContext } from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Context } from "../../store/appContext";

export const PruebaModal = ({ task }) => {
    const [updateTask, setUpdateTask] = useState(task)
    // console.log(updateTask)
    // console.log("me monte")
    console.log(task)
    
    return (
        <div className="modal fade" id="modal-card" aria-hidden="true" show="false" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <input name="name" onChange={(event) => setUpdateTask({ ...updateTask, [event.target.name]: event.target.value })} placeholder={updateTask.name}></input>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <h6>Description :</h6>
                        {/* <input name="content" onChange={(event) => setUpdateTask({ ...updateTask, [event.target.name]: event.target.value })} placeholder="content task"></input> */}
                        <div>
                            <br />
                            <h6>Members :</h6>
                            <select className="form-select" aria-label="Default select example" id="select-type"></select>
                        </div>
                        <div>
                            <br />
                            <h6>Selection priority :</h6>
                            <select className="form-select" aria-label="Default select example" id="select-type" name="priority" value={updateTask.priority} onChange={(event)=>setUpdateTask({...updateTask, [event.target.name]: event.target.value})}>
                                <option defaultValue></option>
                                <option value="Alta"> Alta </option>
                                <option value="Media"> Media </option>
                                <option value="Baja"> Baja </option>
                            </select>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                            Close
                        </button>
                        <button type="button" className="btn btn-success" onClick={() => console.log(updateTask.id)}>
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}
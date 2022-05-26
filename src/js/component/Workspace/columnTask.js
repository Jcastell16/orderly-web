import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { Tasklabel } from "./taskLabel";
import { Context } from "../../store/appContext";


export const Columntask = ({item}) => {
    const { store, actions } = useContext(Context);
    console.log(item)
    
    const DivItem = () => {
        return (
            <Tasklabel />
        )
    };
    return (
        <>

            <div className="row">
                <div className="col" data-col-num="1">
                    <div className="card card-col p-3 border border-3 rounded border-light mx-1 bg-light " style={{ "maxWidth": "20rem", "minWidth": "20rem" }}>
                    <div className="d-flex align-content-center justify-content-between">
                    <h5 type="text" className="text-center title-col form-control-lg mb-2 border-0">{item.name}</h5>
                    <button type="button" className="btn-close text-reset fs-6" onClick={() => actions.handleDeleteColumn(item.id)}></button>
                    </div>
                    {store.tasks.length>0? store.tasks.map((task)=>(<Tasklabel key={task.id} task={task} item={item} />)):<h1>add task</h1>}
                    
                        <div className="card card-col bg-light" data-col="1">
                            <button type="button" className="btn btn-outline-dark border-0" data-ripple-color="dark" onClick={()=> actions.newTask(item.id)}>
                                <i className="fas fa-plus me-2"></i>
                                <label>Add task</label>
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>

        </>
    );
};
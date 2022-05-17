import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { Offcanvas } from "./offcanvas";
import { AddCardTask } from "./addCardTask";


export const Workspace = () => {
    const [column, setColumn] = useState([]);
    const Column = () => {
        return <AddCardTask />
    };
    const handleAddColumn = event => {
        setColumn(column.concat(<Column key={column.length} />));
    };
    return (
        <>
            <div className="d-flex mx-0">
                <AddCardTask />
                {column}
                <div>
                    <button type="button" className="btn btn-outline-dark border-0 my-4 mx-1" data-ripple-color="dark" onClick={handleAddColumn}>
                        <i className="fas fa-plus me-2"></i>
                        <label>Add Column</label>
                    </button>
                </div>
                
            </div>
        </>
    );
};
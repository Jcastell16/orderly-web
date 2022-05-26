import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Offcanvas } from "./offcanvas";
import { Tasklabel } from "./taskLabel";
import {Context} from "../../store/appContext"
import { Columntask } from "./columnTask";


export const Workspace = () => {
    const { actions, store } = useContext(Context);

    return (
        <>
            <div className="main" id="main-0">
                <div className="content">
                    <div>
                    <Offcanvas />
                    <h1 className="text-center">To Do List</h1>
                    </div>
                    <div className="my-2">
                        <span className="btn-icon">
                            <button className="btn btn-primary btn-icon mx-3" onClick={() => actions.handleNewColumn()}><i className="fas fa-plus icon-btn"></i>  Add Column</button>
                        </span>
                    </div>
                    <div className="d-flex p-3 ">
                    {store.columnboard.map((item) => (
                    <Columntask  key={item.id} item = {item}/>
					))}
                    </div>

                </div>
            </div>

        </>
    );
};

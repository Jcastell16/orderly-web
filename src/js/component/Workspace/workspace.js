import React, { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import  Navbar from "./navbar";
import {Context} from "../../store/appContext"
import { Columntask } from "./columnTask";


export const Workspace = () => {
    const { actions, store } = useContext(Context);
    let params = useParams()
	let { id } = params
    useEffect(() => {
        actions.getColumn(id);
      }, []);
    return (
        <>
            <div className="main" id="main-0">
                <div className="content">
                    <div>
                    <Navbar />
                    </div>
                    <div className="mb-2 border-top border-bottom p-2 bg-dark">
                        <span className="btn-icon">
                            <button className="btn btn-primary btn-icon mx-2" onClick={() => actions.handleNewColumn(id)}><i className="fas fa-plus icon-btn"></i>  Add Column</button>
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

import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Offcanvas } from "./offcanvas";
import { Tasklabel } from "./taskLabel";
import {Context} from "../../store/appContext"
import { Tasklabeldos } from "./addTasklabel";

export const Workspace = () => {
    const{store, actions}= useContext(Context)
    const [newTask, setNewTask] = useState(false)
    
    return (
        <>
            <div className="container-fluid mx-3 my-3">
            
                <button type="button" onClick={()=> setNewTask(!newTask)}>add Task</button>
                {newTask && <Tasklabeldos/>}
                
               {store.tasks.length>0? store.tasks.map((task)=>(<Tasklabel key={task.id} task={task} />)):<h1>task</h1>}
                
                
       
                
            </div>

        </>
    );
};
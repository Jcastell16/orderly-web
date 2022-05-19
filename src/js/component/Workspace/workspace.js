import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Offcanvas } from "./offcanvas";
import { Tasklabel } from "./taskLabel";


export const Workspace = () => {

    return (
        <>
            <div className="container-fluid mx-3 my-3">
                <Tasklabel />
                <Tasklabel />
            </div>

        </>
    );
};
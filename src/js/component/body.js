import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Body = () => (
    <div className="p-5 text-center bg-image" style={{"height": "400px", "marginTop": "58px", "backgroundImage":"url(https://mdbcdn.b-cdn.net/img/new/slides/041.webp)" }}>
        <Link className="btn btn-outline-light btn-lg" to="#!" role="button">Call to action</Link>
        <div className="mask">
            <div className="d-flex justify-content-center align-items-center h-100">
                <div className="text-white">
                    <h1 className="mb-3">Heading</h1>
                    <h4 className="mb-3">Subheading</h4>
                    <Link className="btn btn-outline-light btn-lg" to="#!" role="button">Call to action</Link>
                </div>
            </div>
        </div>
    </div>
);
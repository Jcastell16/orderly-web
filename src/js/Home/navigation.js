import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import orderlynav from "../../img/orderly-nav.png";

export const Navigation = () => (
	<>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div className="container px-4 px-lg-5">
                <Link className="navbar-brand text-secondary" to="#page-top"><img src={orderlynav} /></Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0 align-items-center justify-content-center text-center">
                        <li className="nav-item"><Link className="nav-link" to="#about">About</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="#services">Services</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="#portfolio">Portfolio</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="#contact">Contact</Link></li>
                        <li className="nav-item"><Link className="btn btn-primary btn-sm rounded-pill me-2" to="/login">Login</Link></li>
                        <li className="nav-item"><Link className="btn btn-primary btn-sm rounded-pill" to="/register">Register</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
	</>
);

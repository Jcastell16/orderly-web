import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import "../../styles/demo.css";
import orderlynav from "../../img/orderly-nav.png";

export const Navigation = () => (
	<>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div className="container px-4 px-lg-5">
                <a href="#top"  className="navbar-brand text-secondary"><img  src={orderlynav} /></a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0 align-items-center justify-content-center text-center">
                        <li className="nav-item"><a className="nav-link" href="#about"><h5><strong>Nosotros</strong></h5></a></li>
                        <li className="nav-item"><a className="nav-link" href="#services"><h5><strong>Servicios</strong></h5></a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact"><h5><strong>Contactos</strong></h5></a></li>
                        <li className="nav-item"><Link className="btn btn-primary btn-md rounded-pill shadow-lg mx-2 my-2" to="/login">Ingresar</Link></li>
                        <li className="nav-item"><Link className="btn btn-primary btn-md rounded-pill shadow-lg mx-2 my-2" to="/register">Registrar</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
	</>
);

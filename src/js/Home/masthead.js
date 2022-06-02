import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Masthead = () => (
	<>
        <header className="masthead">
            <div className="container px-4 px-lg-5 h-100">
                <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-8 align-self-end">
                        <h1 className="text-white font-weight-bold" id="top">Tu Mejor Opción para Organizar Proyectos</h1>
                        <hr className="divider"/>
                    </div>
                    <div className="col-lg-8 align-self-baseline">
                        <p className="text-white-75 mb-5">¡Orderly puede ayudarlo a organizar tus proyectos! ¡Simplemente debes registrarte y crear tus proyectos donde podras asignar actividades a tus colaboradores, Compuebalo!</p>
                        <a href="#about" className="btn btn-primary btn-xl shadow-lg">Saber más...</a>
                    </div>
                </div>
            </div>
        </header>
	</>
);
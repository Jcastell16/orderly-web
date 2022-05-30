import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const About = () => (
	<>
        <section className="page-section" style={{ backgroundColor: "#ED8740" }} id="about">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="text-white mt-0">¡Tenemos lo que necesitas!</h2>
                        <hr className="divider divider-light" />
                        <p className="text-white-75 mb-4">¡Orderly tiene todo lo que necesita para poner en marcha tus proyectos de manera organizada y eficiente! Registrate y explora los beneficios de nuestra aplicacion, de manera gratuita y fáciles de usar. ¡Sin condiciones!</p>
                        <Link className="btn btn-light btn-xl shadow-lg" to="/register">¡EMPEZAR!</Link>
                    </div>
                </div>
            </div>
        </section>
	</>
);
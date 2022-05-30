import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Services = () => (
	<>
        <section className="page-section" style={{ backgroundColor: "#EEE9E6" }} id="services">
            <div className="container px-4 px-lg-5">
                <h2 className="text-center mt-0">Nuestros Servicios</h2>
                <hr className="divider" />
                <div className="row gx-4 gx-lg-5">
                <div className="row text-center mt-3">
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-calendar-alt fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Planificacion de Proyectos</h4>
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Responsive Design</h4>
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-tasks fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Distribución de actividades</h4>
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
	</>
);
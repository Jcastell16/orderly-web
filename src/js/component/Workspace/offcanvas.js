import React from "react";
import { Link } from "react-router-dom";
import orderlynav from "../../../img/orderly-nav.png";
import orderlyavatar from "../../../img/img_avatar.png";


export const Offcanvas = () => (
    <>
        <button className="btn btn-primary btn-md rounded-pill mx-2 my-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            <i className="fas fa-align-left mx-1"></i> Menú
        </button>
        <div className="offcanvas offcanvas-start" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{ "maxWidth": "250px" }}>
            <div className="offcanvas-header">
                <Link to="/" className="offcanvas-title" id="offcanvasExampleLabel">
                    <img src={orderlynav} />
                </Link>
                <button type="button" className="btn btn-primary rounded-pill" data-bs-dismiss="offcanvas" aria-label="Close"><i className="fas fa-align-right"></i></button>
            </div>
            <hr className="dropdown-divider"></hr>
            <div className="offcanvas-body">
                <div className="btn-group-vertical mt-0">
                    <Link to="" className="list-group-item list-group-item-action border-0"><i className="fas fa-home me-2 text-primary"></i>Inicio</Link>
                    <Link to="#" className="list-group-item list-group-item-action border-0 "><i className="fas fa-list me-2 text-primary"></i>Mi lista de tareas</Link>
                    <Link to="#" className="list-group-item list-group-item-action border-0"><i className="fas fa-check-circle me-2 text-primary"></i>Bandeja de entrada</Link>
                    <Link to="" className="list-group-item list-group-item-action border-0"><i className="fas fa-clipboard me-2 text-primary"></i>Mi tablero</Link>
                    <h6 className="ms-2 text-uppercase text-xs text-dark font-weight-bolder opacity-8 mt-3">Account pages</h6>
                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <Link to="" className="list-group-item list-group-item-action border-0"><i className="fas fa-user fa-lg me-2 fa-fw text-primary"></i>Profile</Link>
                    </div>
                    <h6 className="ms-2 text-uppercase text-xs text-dark font-weight-bolder opacity-8 mt-3">Project</h6>
                    <div className="dropdown mt-1">
                        <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                            All Project
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><Link className="dropdown-item" to="#">Proyecto I</Link></li>
                            <li><Link className="dropdown-item" to="#">Proyecto II</Link></li>
                            <li><Link className="dropdown-item" to="#">Proyecto III</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="dropdown-divider"></hr>
            <div className="d-flex align-items-end align-text-center">
            <div className="text-center me-2 d-flex align-items-center justify-content-center">
            <img src={orderlyavatar} alt="Avatar" className="avatar mx-2 my-2" style={{ "width": "50px", "height": "50px", "borderRadius": "50%", "verticalAlign": "middle" }}/>
            <h6>Administrator</h6>
            <button className="btn btn-primary btn-md rounded-pill mx-3 my-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            <i className="fas fa-sign-out-alt"></i>
            </button>
            
            </div>
            </div>
        </div>
    </>
);
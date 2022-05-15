import React from "react";
import { Link } from "react-router-dom";
import oderlyImage from "../../../img/Orderly-Navbar.png";

export const NavbarUser = () => {


    return (
        <>
            <Link className="btn btn-primary ms-3 mt-3" data-bs-toggle="offcanvas" to="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                <i className="fas fa-align-left mx-1"></i> <span className="mx-1">Menu</span>
            </Link>
            <div className="offcanvas offcanvas-start bg-dark" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{ "maxWidth": "230px" }}>
                <div className="offcanvas-header">
                    <Link to="/" className="offcanvas-title" id="offcanvasExampleLabel">
                        <img src={oderlyImage} />
                    </Link>
                    <button type="button" className="btn btn-dark " data-bs-dismiss="offcanvas" aria-label="Close"><i className="fas fa-align-right"></i></button>
                </div>
                <div className="offcanvas-body bg-dark">
                    <ul className="list-group mb-2">
                        <Link to="/homeuser" className="list-group-item list-group-item-action bg-dark border-0 text-white"><i className="fas fa-home me-2"></i>Inicio</Link>
                        <Link to="#" className="list-group-item list-group-item-action bg-dark border-0 text-white"><i className="fas fa-list me-2"></i>Mi lista de tareas</Link>
                        <Link to="#" className="list-group-item list-group-item-action bg-dark border-0 text-white"><i className="fas fa-check-circle me-2"></i>Bandeja de entrada</Link>
                        <Link to="/taskboard" className="list-group-item list-group-item-action bg-dark border-0 text-white"><i className="fas fa-clipboard me-2"></i>Mi tablero</Link>
                    </ul>
                </div>
            </div>
        </>
    );
};

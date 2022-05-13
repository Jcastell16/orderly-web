import React from "react";
import { Link } from "react-router-dom";

import "../../styles/home.css";
import { Body } from "../component/body";

export const Home = () => (
	<>
    <div className="d-flex text-center justify-content-center align-items-center  bg-image" style={{"height": "100vh","backgroundImage":"url(https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg", "backgroundSize": "cover"}}>
        <div className="mask">
            <div className="d-flex textjustify-content-center align-items-center h-100">
                <div className="text-white mt-5">
                    <h1 className="mb-3">Quieres manejar tus proyectos de forma organizada?</h1>
                    <h4 className="mb-3">Con Orderly podras orgarnizar tus proyectos de mejor manera y <br/>agregar tareas que te permitiran ser efectivo y organizado</h4>
                    <Link className="btn btn-outline-light border-3 btn-lg" to="#!" role="button">Registrarme Ahora</Link>
                </div>
            </div>
        </div>
    </div>
	</>
);

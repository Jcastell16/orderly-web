import React, { useContext, useState } from "react"
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"
import { Footer } from "./footer"
import orderlynav from "../../img/orderly-nav.png";

const Login = () => {
    const { store,actions } = useContext(Context)
    const [login, setLogin] = useState({
        email: "",
        password: ""
    });
    return (
        <>
            <div className="container-fluid vh-100 p-3" style={{ background: "url(https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg)", backgroundSize: "cover" }}>
                <div className="">
                <Link className="mx-3" to="/"><img src={orderlynav} /></Link>
                    <div className="mt-3 rounded d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-6 col-sm-12 shadow-lg p-5 bg-light">
                            <div className="text-center">
                                <form className="text-center border border-light p-5" action="#!">
                                <h2 className="text-center h1 fw-bold mx-1 mx-md-4 mb-4">Login</h2>
                                    <div className="">
                                    <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-envelope fa-lg me-2 fa-fw"></i>
                                    <input type="email" id="defaultLoginFormEmail" className="form-control" name="email" placeholder="E-mail" onChange={(event) => setLogin({ ...login, [event.target.name]: event.target.value })} />
                                    </div>
                                    <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-lock fa-lg me-2 fa-fw"></i>
                                        <input type="password" id="defaultLoginFormPassword" className="form-control" name="password" placeholder="Password" onChange={(event) => setLogin({ ...login, [event.target.name]: event.target.value })} />
                                        </div>
                                        <Link className="btn btn-primary btn-md rounded-pill shadow-lg mb-2" to="/dashboard" type="submit" onClick={() => actions.handleLogin(login)} >Login</Link>
                                        <p >No eres miembro?
                                            <Link className="mx-2" to="/register">Registrarse</Link>
                                        </p>
                                        <p>o inicia sesión con:</p>
                                        <Link to="#" className="mx-2" role="button"><i className="fab fa-facebook-f light-blue-text"></i></Link>
                                        <Link to="#" className="mx-2" role="button"><i className="fab fa-twitter light-blue-text"></i></Link>
                                        <Link to="#" className="mx-2" role="button"><i className="fab fa-linkedin-in light-blue-text"></i></Link>
                                        <Link to="#" className="mx-2" role="button"><i className="fab fa-github light-blue-text"></i></Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default Login;
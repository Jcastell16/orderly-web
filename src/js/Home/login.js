import React, { useContext, useState } from "react"
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"
import { Footer } from "./footer"

const Login = () => {
    const { store,actions } = useContext(Context)
    const [login, setLogin] = useState({
        email: "",
        password: ""
    });
    return (
        <>
            <div className="container-fluid vh-100 mt-5">
                <div className="mb-4 h-100">
                    <div className="rounded d-flex justify-content-center align-items-center h-100">
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
                                        <div className="d-flex justify-content-around">
                                            <div>
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input type="checkbox" className="custom-control-input me-1" id="defaultLoginFormRemember" />
                                                    <label className="custom-control-label" htmlFor="defaultLoginFormRemember">Remember me</label>
                                                </div>
                                            </div>
                                            <div>
                                                <Link to="">Forgot password?</Link>
                                            </div>
                                        </div>
                                        <Link className="btn btn-primary btn-xl mb-2" to="/newproject"    type="submit" onClick={() => actions.handleLogin(login)} >Login</Link>
                                        <p >Not a member?
                                            <Link className="mx-2" to="">Register</Link>
                                        </p>
                                        <p>or sign in with:</p>
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
                <Footer />
            </div>
            
        </>
    );
};

export default Login;
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Footer } from "./footer"
import orderlynav from "../../img/orderly-nav.png";

const Register = () => {
  const { store, actions } = useContext(Context);

  const [register, setRegister] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });
  return (
    <>

      <section className="vh-100">
        <div className="container h-100">
          <div className="row rounded d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11 border border-light">
              <div className="card text-black shadow-lg p-5 bg-light">
                <div className="card-body p-md-3">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <h2 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 ">
                        Registrate
                      </h2>
                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              placeholder="Nombre"
                              onChange={(event) =>
                                setRegister({
                                  ...register,
                                  [event.target.name]: event.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              className="form-control"
                              name="lastname"
                              placeholder="Apellido"
                              onChange={(event) =>
                                setRegister({
                                  ...register,
                                  [event.target.name]: event.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              placeholder="Email"
                              onChange={(event) =>
                                setRegister({
                                  ...register,
                                  [event.target.name]: event.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              className="form-control"
                              name="password"
                              placeholder="Password"
                              onChange={(event) =>
                                setRegister({
                                  ...register,
                                  [event.target.name]: event.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 ">
                          <Link
                            className="btn btn-primary btn-xl"
                            to="/"
                            onClick={() => actions.handle_register(register)}
                          >
                            <span>Registrate</span>
                          </Link>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src={"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"}
                        className="img-fluid rounded-3"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Register;

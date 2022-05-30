import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";
import details from "../../../styles/details.css";
import Viewproject from "./viewproject";

const Navbar = () => {
  const { store, actions } = useContext(Context);

  const { profileUser } = store;

  const initialState = {
    gender: "",
    description: "",
  };

  const [profile, getProfile] = useState(initialState);

  const handleGender = (event) => {
    getProfile({ ...profile, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <img
                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                alt=""
                style={{ width: "70px", height: "70px" }}
                className="rounded-circle"
              />
              <h4 className="modal-title ms-2" id="exampleModalLabel">
                Perfil
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="d-flex flex-row">
                <input
                  type="text"
                  className="form-control me-2"
                  name="Nombre"
                  value={profileUser.name}
                />
                <input
                  type="text"
                  className="form-control"
                  name="Apellido"
                  value={profileUser.lastname}
                />
              </div>
              <div className="form-check mt-2">
                <input
                  className="form-check-input"
                  type="radio"
                  value="Hombre"
                  name="gender"
                  onChange={handleGender}
                />
                <h6 className="form-check-label" htmlFor="inlineRadio1">
                  Hombre
                </h6>
                <input
                  className="form-check-input"
                  type="radio"
                  value="Mujer"
                  name="gender"
                  onChange={handleGender}
                />
                <h6 className="form-check-label" htmlFor="inlineRadio2">
                  Mujer
                </h6>
              </div>
              <textarea
                className="form-control mt-3"
                rows="2"
                id="description"
                name="description"
                placeholder="Escribe una descripcion de ti"
                onChange={(event) =>
                  getProfile({
                    ...profile,
                    [event.target.name]: event.target.value,
                  })
                }
              ></textarea>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <Link
                type="button"
                className="btn btn-primary"
                to="/dashboard"
                onClick={() => actions.editProfile(profile)}
              >
                Guardar
              </Link>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <i className="fas fa-home"></i> Home
                </a>
              </li>
              <li className="nav-item d-flex">
                <button
                  className="nav-link border-0 bg-light"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => actions.getProfile()}
                >
                  <i className="fas fa-user"></i> Mi perfil
                </button>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Proyectos
                </a>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {store.projects.length > 0 ? (
                    <>
                      {store.projects.map((project) => (
                        <li key={project.id} className="dropdown-item" >
                          <Link to={`/project/${project.id}`} className="text-decoration-none text-dark">
                            {project.name}
                          </Link>
                        </li>
                      ))}
                    </>
                  ) : (
                    <li>No tiene projectos</li>
                  )}
                </ul>
              </li>
            </ul>
            <div className="d-flex mx-auto">
              <i className="fas fa-clipboard fa-2x p-2"></i>
              <h4 className="p-2">Orderly</h4>
            </div>
            <form className="d-flex">
              <div className="p-1">
                <Link
                  className="btn btn-primary btn-md rounded-pill shadow-lg"
                  to="/newproject"
                  type="submit"
                >
                  Nuevo Proyecto +
                </Link>
              </div>
              <div className="p-1">
                <Link
                  className="btn btn-primary btn-md rounded-pill shadow-lg"
                  to="/"
                  type="submit"
                  onClick={() => actions.Logout()}
                >
                  Logout
                </Link>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

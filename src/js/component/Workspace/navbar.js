import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";
import details from "../../../styles/details.css";
import Viewproject from "./viewproject";

const Navbar = () => {
  const { store, actions } = useContext(Context);

  const { profileUser } = store;

  const [profile, setProfile] = useState({
    name: "",
    lastname: "",
    gender: "",
    description: "",
  });

  console.log(profile)

  const handleGender = (event) => {
    setProfile({ ...profile, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    if (store.token) {
      actions.getProjects();
      actions.getProfile();
    }
  }, []);

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
              {profileUser.gender == "Hombre" ? (
                <img
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  alt=""
                  style={{ width: "70px", height: "70px" }}
                  className="rounded-circle"
                />
              ) : profileUser.gender == "Mujer" ? (
                <img
                  src="https://www.w3schools.com/howto/img_avatar2.png"
                  alt=""
                  style={{ width: "70px", height: "70px" }}
                  className="rounded-circle"
                />
              ) : (
                <img
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
                  alt=""
                  style={{ width: "70px", height: "70px" }}
                  className="rounded-circle"
                />
              )}
              <h2 className="modal-title mx-3" id="exampleModalLabel">
                {profileUser.name} {profileUser.lastname}
              </h2>
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
                  name="name"
                  placeholder="Editar Nombre"
                  onChange={(event) =>
                    setProfile({
                      ...profile,
                      [event.target.name]: event.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  className="form-control"
                  name="lastname"
                  placeholder="Editar Apellido"
                  onChange={(event) =>
                    setProfile({
                      ...profile,
                      [event.target.name]: event.target.value,
                    })
                  }
                />
              </div>
              <div className="form-check mt-2">
                {profileUser.gender == "Hombre" ? (
                  <>
                    <input
                      className="form-check-input"
                      type="radio"
                      value="Hombre"
                      name="gender"
                      checked="checked"
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
                  </>
                ) : profileUser.gender == "Mujer" ? (
                  <>
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
                      checked="checked"
                      onChange={handleGender}
                    />
                    <h6 className="form-check-label" htmlFor="inlineRadio2">
                      Mujer
                    </h6>
                  </>
                ) : (
                  <>
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
                  </>

                )}
              </div>
              <h5 className="form-label">Descripción</h5>
              {profileUser.description == null && profileUser.description == "" ? (
                <textarea
                  className="form-control mt-3"
                  rows="2"
                  id="description"
                  name="description"
                  placeholder="Cuentanos sobre ti"
                  onChange={(event) =>
                    setProfile({
                      ...profile,
                      [event.target.name]: event.target.value,
                    })
                  }
                ></textarea>
              ) : (
                <textarea
                  className="form-control mt-3"
                  rows="2"
                  id="description"
                  name="description"
                  placeholder={profileUser.description}
                  onChange={(event) =>
                    setProfile({
                      ...profile,
                      [event.target.name]: event.target.value,
                    })
                  }
                ></textarea>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal">
                Cerrar
              </button>
              <Link
                type="button"
                className="btn btn-primary"
                to="/dashboard"
                onClick={() =>
                  actions.editProfile(
                    profile.name,
                    profile.lastname,
                    profile.gender,
                    profile.description
                  )
                }
                data-bs-dismiss="modal">
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
                <Link
                  className="nav-link active"
                  to="/dashboard"
                  aria-current="page"
                >
                  <i className="fas fa-home"></i> Home
                </Link>
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
                <Link
                  className="nav-link dropdown-toggle"
                  to=""
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Proyectos
                </Link>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {store.projects.length > 0 ? (
                    <>
                      {store.projects.map((project) => (
                        <li key={project.id} className="dropdown-item">
                          <Link
                            to={`/project/${project.id}`}
                            className="text-decoration-none text-dark"
                          >
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

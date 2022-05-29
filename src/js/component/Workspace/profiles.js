import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";

const Profiles = ({ profile }) => {
  
  return (
    <>
          <div
        className="modal fade"
        id="exampleModal1"
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
                  defaultValue={profile.name}
                  readOnly
                />
                <input type="text" className="form-control" name="Apellido" defaultValue={profile.lastname} readOnly/>
              </div>
              <textarea
                className="form-control mt-3"
                rows="2"
                id="description"
                name="description"
                defaultValue={profile.description}
                readOnly
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
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-lg-2 mb-4 me-3">
        <div className="card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <img
                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                alt=""
                style={{ width: "45px", height: "45px" }}
                className="rounded-circle"
              />
              <div className="ms-3">
                <p className="fw-bold mb-1">
                  {profile.name} {profile.lastname}
                </p>
                <p className="text-muted mb-0">
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal1"
                    className="btn btn-primary"
                  >
                    Ver perfil
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profiles;

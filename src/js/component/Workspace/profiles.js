import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "react-datepicker/dist/react-datepicker.css";
import details from "../../../styles/details.css"

const Profiles = ({ profile }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <img
            src="https://mdbootstrap.com/img/new/avatars/8.jpg"
            alt=""
            style={{ width: "70px", height: "70px" }}
            className="rounded-circle"
          />
          <h4 className="modal-title ms-2" id="exampleModalLabel">
            Perfil
          </h4>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-row">
            <input
              type="text"
              className="form-control me-2"
              name="Nombre"
              defaultValue={profile.name}
              readOnly
            />
            <input
              type="text"
              className="form-control"
              name="Apellido"
              defaultValue={profile.lastname}
              readOnly
            />
          </div>
          <textarea
            className="form-control mt-3"
            rows="2"
            id="description"
            name="description"
            defaultValue={profile.description}
            readOnly
          ></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="col-xl-12">
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

                <Button variant="btn btn-light px-1 py-0" onClick={handleShow}>
                Ver perfil        
                </Button>
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

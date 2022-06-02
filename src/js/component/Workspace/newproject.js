import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import projectimg from "../../../img/project.jpg";


const initialState = {
  email: ""
};

export const Newproject = () => {
  const { store, actions } = useContext(Context);
  const [isGroup, setIsGroup] = useState("");
  const [member, setMember] = useState(initialState);
  const [users, setUsers] = useState([]);

  const [project, setproject] = useState({
    name: "",
    due_date: "",
    description: "",
    members: []
  });

  const handleOnChange = (value) => {
    setIsGroup(value);
    if (value == "individual") {
      setproject({ ...project, members: [] });
    }
  };
  const handleChangeMember = (event) => {
    setMember({ ...member, [event.target.name]: event.target.value });
    getUsers(member.email);
  };

  const updateMember = () => {
    if (users.email.length > 0) {
      if (member.email.trim() != "") {
        let repeatMember = project.members.filter(
          (item, index) => item.email == member.email
        );
        if (repeatMember.length == 0) {
          setproject({ ...project, members: [...project.members, member] });
        }
      }
    }
  };

  const deleteMember = (id) => {
    let newListMember = project.members.filter((item, index) => index != id);
    setproject({ ...project, members: newListMember });
  };

  const getUsers = async (email) => {
    try {
      let response = await fetch(`${store.URL_BASE}/users/${email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${store.token}`,
        },
      });
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setUsers({
          ...users,
          email: data,
        });
      }
    } catch (error) {
      console.log("Hubo un error", error);
    }
  };
  console.log(project)
  return (
    <>

      <section className="vh-150">
        <div className="container h-150">
          <div className="row rounded d-flex justify-content-center align-items-center h-150">
            <div className="col-lg-12 col-xl-11 border border-light mt-5">
              <div className="card text-black shadow-lg p-2 bg-light">
                <div className="card-body p-md-3">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <h2 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 ">
                        Nuevo Proyecto
                      </h2>
                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-project-diagram fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              placeholder="Nombre"
                              required
                              onChange={(event) =>
                                setproject({
                                  ...project,
                                  [event.target.name]: event.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-2">
                          <i className="fas fa-calendar-alt fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <div className="input-group date" id="datepicker">
                              <DatePicker
                                className="form-control form-outline flex-fill mb-0"
                                wrapperClassName="datePicker"
                                dateFormat='dd-MM-yyyy'
                                selected={project.due_date}
                                onChange={(date) =>
                                  setproject({ ...project, due_date: date })
                                }
                              />
                            </div>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-2 mx-5">
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio1"
                              value="option1"
                              checked={isGroup == "individual" ? true : false}
                              onChange={() => handleOnChange("individual")}
                            />
                            <h6
                              className="form-check-label me-3"
                              htmlFor="inlineRadio1"
                            >
                              Individual
                            </h6>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio2"
                              value="option2"
                              checked={isGroup == "grupal" ? true : false}
                              onChange={() => handleOnChange("grupal")}
                            />
                            <h6
                              className="form-check-label"
                              htmlFor="inlineRadio2"
                            >
                              Grupal
                            </h6>
                          </div>
                        </div>
                      </form>
                      <form className="mx-1 mx-md-4">
                        {isGroup == "grupal" ? (
                          <div className="border border-1 rounded-3 p-4 form-outline flex-fill mb-3">
                            <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user-check fa-lg ms-2 me-3 fa-fw"></i>
                              <input
                                type="email"
                                className="form-control"
                                id="miembros"
                                name="email"
                                value={member.email}
                                onChange={handleChangeMember}
                              />
                            </div>

                            <div className="card card-col bg-light mb-3">
                              <button
                                className="btn btn-outline-primary"
                                type="button"
                                onClick={updateMember}
                              >
                                <i className="fas fa-check fa-lg ms-2 me-3 fa-fw"></i>
                              </button>
                            </div>
                            {project.members.map((item, index) => (
                              <div key={index} className="border-bottom w-100 mt-2">
                                <ul className="list-group list-group-flush vertical-align">
                                  <li className="list-group-item d-flex justify-content-between">
                                    {item.email}
                                    <button
                                      type="button"
                                      className="eliminar btn btn-light mt-2 px-3 py-1"
                                      onClick={() => deleteMember(index)}
                                    >
                                      <i className="fas fa-times"></i>
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            ))}
                          </div>
                        ) : (
                          ""
                        )}
                        <div className="col-md-12 mx-2">
                          <h5 className="form-label">Descripción</h5>
                          <textarea
                            className="form-control"
                            rows="2"
                            id="description"
                            name="description"
                            onChange={(event) =>
                              setproject({
                                ...project,
                                [event.target.name]: event.target.value,
                              })
                            }
                          ></textarea>
                        </div>
                        <div className="justify-content-center mx-4 mt-3 mb-lg-4">
                          {project.name === "" ? (<Link
                            className="btn btn-primary btn-xl"
                            to="/newproject"
                            type="button"
                          >
                            <span>Guardar</span>
                          </Link>): (<Link
                            className="btn btn-primary btn-xl"
                            to="/dashboard"
                            type="button"
                            onClick={() =>
                              actions.handle_newProject(project)
                            }
                          >
                            <span>Guardar</span>
                          </Link>)}
                          
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src={projectimg}
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
      </section>
    </>
  );
};

import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import projectimg from "../../../img/project.jpg";

const Viewproject = () => {
  const { store, actions } = useContext(Context);
  const [project, setProject] = useState([]
    );

  const { projects, membersProjects } = store;

  let params = useParams();
  let { id } = params;

  const getProjects = () => {
    let info = projects.find((item) => {
      return item.id == id;
    });
    if (info) {
      setProject(info);
    }
    
  };


  useEffect(() => {
    getProjects();
    actions.getMemberProjects(id)
  },[]);

  
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
                        {project.name}
                      </h2>
                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-project-diagram fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              defaultValue={project.name}
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-2">
                          <i className="fas fa-calendar-alt fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <div className="input-group date" id="datepicker">
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              dateformat='dd-MM-yyyy'
                              defaultValue={project.due_date}
                              readOnly
                            />
                            </div>
                          </div>
                          <div className="form-outline flex-fill mb-0 ms-2">
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              defaultValue={project.status}
                              readOnly
                            />
                          </div>
                        </div>
                      </form>
                      <form className="mx-1 mx-md-4">
                      <h6 className="form-label mt-2">Miembros</h6>
                      {store.membersProjects.map((item, index) => (
                              <div key={index} className="border-bottom w-100 mt-2">
                                <ul className="list-group list-group-flush vertical-align">
                                  <li className="list-group-item d-flex justify-content-between">
                                    {item.email}
                                  </li>
                                </ul>
                              </div>
                            ))}
                        <div className="col-md-12 mx-2 mt-2">
                          <h6 className="form-label">Descripción</h6>
                          <textarea
                            className="form-control"
                            rows="2"
                            id="description"
                            name="description"
                            defaultValue={project.description}
                            readOnly
                          ></textarea>
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

export default Viewproject;

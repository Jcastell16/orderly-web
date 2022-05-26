import React, { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import Projects from "./projects";
import { Offcanvas } from "./offcanvas";

const Dashboard = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getProjects();
  }, []);
  console.log(store.projects)
  return (
    <>
      <Offcanvas />
      <div className="container mt-4 pt-4 mb-5 pb-5">
        <div className="d-flex flex-row mb-3" style={{ height: "350px" }}>
          <div className="col-xs-6 text-left shadow-lg  me-3 bg-light rounded-3 w-100">
            <div className="d-flex ps-5 pt-4">
              <div>
                <i className="fas fa-tasks pe-1"></i>
              </div>
              <div>
                <h5> Mis Tareas</h5>
              </div>
            </div>
          </div>
          <div className="col-xs-12 text-left shadow-lg me-3 bg-light rounded-3 w-100 ">
            <div className="d-flex ps-5 pt-4">
              <div>
                <i className="fas fa-project-diagram pe-1"></i>
              </div>
              <div>
                <h5> Mis Proyectos</h5>
              </div>
            </div>
            <div>
              {store.projects.map((project) => (
                <Projects key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
        <div className="row" style={{ height: "250px" }}>
          <div className="col-xs-6 text-left shadow-lg me-3 bg-light rounded-3 w-100">
            <div className="d-flex ps-5 pt-4">
              <div>
                <i className="fas fa-users pe-1"></i>
              </div>
              <div>
                <h5> Colaboradores</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

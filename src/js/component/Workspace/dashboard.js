import React, { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import Projects from "./projects";
import Profiles from "./profiles";
import Tasklist from "./tasklist";
import Navbar from "./navbar";

const Dashboard = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getProjects();
    actions.getProfiles();
    actions.getTasks();
  }, []);

  return (
    <>

      <Navbar />
      <div className="container mt-4 pt-4 mb-5 pb-5" style={{backgroundColor:"#FFD4AA"}}>
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
            <div>
              {store.tasksMember.length > 0 ? (
                <>
                  <ul className="list-group list-group-light list-group-small">
                    {store.tasksMember.map((task) => (
                      <Tasklist key={task.id} task={task} />
                    ))}
                  </ul>
                </>
              ) : (
                <span className="p-5 m-5">No tiene tareas asignadas</span>
              )}
            </div>
          </div>
          <div className="col-xs-12 text-left shadow-lg  bg-light rounded-3 w-100 ">
            <div className="d-flex pt-4 ps-5">
              <div>
                <i className="fas fa-project-diagram pe-1"></i>
              </div>
              <div>
                <h5> Mis Proyectos</h5>
              </div>
            </div>
            <div className="d-flex p-2 ms-3">
              {store.projects.length > 0 ? (
                <>
                  {store.projects.map((project) => (
                    <Projects key={project.id} project={project} />
                  ))}
                </>
              ) : (
                "Crea un proyecto"
              )}
            </div>
          </div>
        </div>
        <div className="row m-0" style={{ height: "350px" }}>
          <div className="col-xs-6 text-left shadow-lg bg-light rounded-3 w-100">
            <div className="d-flex ps-5 pt-4">
              <div>
                <i className="fas fa-users pe-1"></i>
              </div>
              <div>
                <h5> Colaboradores</h5>
              </div>
            </div>
            <div>
              {store.profiles.length > 0 ? (
                <>
                  <div className="container">
                    <div className="d-flex">
                      {store.profiles.map((profile) => (
                        <Profiles key={profile.id} profile={profile} />
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                "No tiene colaboradores"
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

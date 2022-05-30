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
            <div>
              {store.tasksMember.length > 0 ? (
                <>
                  <ul className="list-group list-group-light list-group-small p-4 border-top border-bottom">
                    {store.tasksMember.map((task) => (
                      <Tasklist key={task.id} task={task} />
                    ))}
                  </ul>
                </>
              ) : (
                <h6 className="p-4 mx-4">No tiene tareas asignadas</h6>
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
            <div className="d-flex">
              {store.projects.length > 0 ? (
                <>
                  {store.projects.map((project) => (
                    <Projects key={project.id} project={project} />
                  ))}
                </>
              ) : (
                <h6 className="p-4 mx-4">Crea un proyecto</h6>
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
                <h6 className="p-4 mx-4">No tiene colaboradores</h6>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

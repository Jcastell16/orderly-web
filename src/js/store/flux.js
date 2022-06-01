import { stringify } from "query-string";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      URL_BASE: "http://127.0.0.1:3000",
      token: localStorage.getItem("token") || "",
      tasks: [],
      modalTask: [],
      columnboard: [],
      projects: [],
      profiles: [],
      tasksMember: [],
      profileUser: [],
      membersProjects: []
    },
    actions: {
      handleInitialData: async ()=>{
        let actions = getActions();
        actions.getProjects();
        actions.getTasks();
        actions.getProfiles();
        actions.getProfile();
      },
      handle_register: async (register) => {
        let store = getStore();
        try {
          const response = await fetch(`${store.URL_BASE}/register`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(register),
          });
          if (response.ok) {
            console.log("Usuario fue registrado");
          } else {
            console.log("Hubo un error");
          }
        } catch (error) {
          console.log(error);
        }
      },

      handleLogin: async (login) => {
        let store = getStore();
        let actions = getActions();
        const response = await fetch(`${store.URL_BASE}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(login),
        });
        let data = await response.json();
        if (response.ok) {
          setStore({
            ...store,
            token: data.token,
          });
          localStorage.setItem("token", data.token);
          actions.handleInitialData();
        } else {
          console.log("ocurrio un error");
        }
      },

      handleTasks: async () => {
        let store = getStore();
        try {
          let response = await fetch(`${store.URL_BASE}/task`, {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${store.token}`,
            },
          });
          if (response.ok) {
            let data = await response.json();
            setStore({
              ...store,
              tasks: data,
            });
          }
        } catch (error) {
          console.log("error");
        }
      },

      newTask: async (id, projectId) => {
        let store = getStore();
        let actions = getActions();
        let body = {
          name: "title task",
          description: "task content",
          project_id: projectId,
          columntask_id: id,
        };
        try {
          let response = await fetch(`${store.URL_BASE}/task`, {
            method: "POST",
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${store.token}`,
            },
            body: JSON.stringify(body),
          });
          if (response.ok) {
            actions.handleTasks();
          }
        } catch (error) {
          console.log("ocurrio un error", error);
        }
      },

      handleUpdateTask: async (task) => {
        let store = getStore();
        let actions = getActions();
        let body = task;
        try {
          let response = await fetch(`${store.URL_BASE}/task`, {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${store.token}`,
            },
            body: JSON.stringify(body)
          })
          if (response.ok) {
            actions.handleTasks()
          }
        }
        catch (error) {
          console.log("ocurrio un error", error)
        }
      },
      deleteTask: async (id) => {
        let store = getStore();
        let actions = getActions();
        let body = {
          id: id,
        };
        try {
          let response = await fetch(`${store.URL_BASE}/task`, {
            method: "DELETE",
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${store.token}`,
            },
            body: JSON.stringify(body),
          });
          if (response.ok) {
            actions.handleTasks();
          }
        } catch (error) {
          console.log("ocurrio un error", error);
        }
      },
      getColumn: async (project_id) => {
        let store = getStore();
        let actions = getActions();
        try {
          let response = await fetch(`${store.URL_BASE}/column/${project_id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (response.ok) {
            let data = await response.json();
            setStore({
              ...store,
              columnboard: data,
            });
          }
        } catch (error) {
          console.log("Error try again later!!", error);
        }
      },
      handleNewColumn: async (project_id) => {
        let store = getStore();
        let actions = getActions();
        let body = {
          name: "",
          project_id: project_id,
        };
        try {
          let response = await fetch(`${store.URL_BASE}/column`, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (response.ok) {
            actions.getColumn(project_id);

          } else {
            window.alert(
              "This Favorite already exists in your list, enter a different one!"
            );
          }
        } catch (error) {
          console.log("Error try again later!!", error);
        }
      },
      handleUpdateColumn: async (name, column_id, project_id) => {
        let store = getStore();
        let actions = getActions();
        let body = {
          name: name,
          id: column_id,
        };
        try {
          let response = await fetch(`${store.URL_BASE}/column`, {
            method: "PATCH",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (response.ok) {
            actions.getColumn(project_id);
          } 
        } catch {
          console.log(error);
        }
      },
      handleDeleteColumn: async (id, project_id) => {
        let store = getStore();
        let actions = getActions();
        let body = {
          id: id,
        };
        try {
          let response = await fetch(`${store.URL_BASE}/column`, {
            method: "DELETE",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (response.ok) {
            actions.getColumn(project_id);
          }
        } catch (error) {
          console.log("Error try again later!!", error);
        }
      },
      handle_newProject: async (project) => {
        let store = getStore();
        try {
          const response = await fetch(`${store.URL_BASE}/newproject`, {
            method: "POST",
            body: JSON.stringify(project),
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${store.token}`,
            },
          });
          if (response.ok) {
            console.log("projecto y miembros fueron registrados");
          } else {
            console.log("ocurrio un error");
          }
        } catch (error) {
          console.log(error);
        }
      },
      getProjects: async () => {
        let store = getStore();
        try {
          let response = await fetch(`${store.URL_BASE}/projects`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${store.token}`,
            },
          });
          if (response.ok) {
            let data = await response.json();
            setStore({
              ...store,
              projects: data,
            });
          } else {
            console.log("No es miembro de un proyecto");
          }
        } catch (error) {
          console.log("Hubo un error", error);
        }
      },

      getProfiles: async () => {
        let store = getStore();
        try {
          let response = await fetch(`${store.URL_BASE}/profiles`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${store.token}`,
            },
          });
          if (response.ok) {
            let data = await response.json();
            setStore({
              ...store,
              profiles: data,
            });
          } else {
            console.log("No tiene colaboradores de proyecto");
          }
        } catch (error) {
          console.log("Hubo un error", error);
        }
      },

      getTasks: async () => {
        let store = getStore();
        try {
          let response = await fetch(`${store.URL_BASE}/membertask`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${store.token}`,
            },
          });
          if (response.ok) {
            let data = await response.json();
            setStore({
              ...store,
              tasksMember: data,
            });
          } else {
            console.log("No tiene tareas asignadas");
          }
        } catch (error) {
          console.log("Hubo un error", error);
        }
      },

      getProfile: async () => {
        let store = getStore();
        try {
          let response = await fetch(`${store.URL_BASE}/profile`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${store.token}`,
            },
          });
          if (response.ok) {
            let data = await response.json();
            setStore({
              ...store,
              profileUser: data,
            });
          } else {
            console.log("Hubo un error");
          }
        } catch (error) {
          console.log("Hubo un error", error);
        }
      },

      editProfile: async (profile) => {
        let store = getStore();
        try {
          let response = await fetch(`${store.URL_BASE}/profile`, {
            method: "PUT",
            body: JSON.stringify(profile),
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${store.token}`,
            },
          });
          if (response.ok) {
            console.log("Se guardaron los cambios en el perfil del usuario");
          } else {
            console.log("Hubo un error");
          }
        } catch (error) {
          console.log("Hubo un error", error);
        }
      },

      getMemberProjects: async (id) => {
        let store = getStore();
        try {
          let response = await fetch(`${store.URL_BASE}/projectmember/${id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${store.token}`,
            },
          });
          if (response.ok) {
            let data = await response.json();
            setStore({
              ...store,
              membersProjects: data,
            });
            console.log("Se obtuvieron los miembros del proyecto");
          } else {
            console.log("Hubo un error");
          }
        } catch (error) {
          console.log("Hubo un error", error);
        }
      },

      Logout: () => {
        let store = getStore();
        setStore({
          ...store,
          token: "",
        });
        localStorage.removeItem("token");
      },
    },
  };
};

export default getState;

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
    },
    actions: {
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
        } else {
          console.log("ocurrio un error");
        }
      },

      // handleTasks: async (id) => {
      //   let store = getStore();
      //   try {
      //     let response = await fetch(`${store.URL_BASE}/task/${id}`, {
      //       method: "GET",
      //       headers: {
      //         "Content-type": "application/json",
      //       },
      //     });
      //     if (response.ok) {
      //       let data = await response.json();
      //       setStore({
      //         ...store,
      //         tasks: data,
      //       });
      //     }
      //   } catch (error) {
      //     console.log("error");
      //   }
      // },

      // newTask: async (id, project_id) => {
      //   let store = getStore();
      //   let actions = getActions();
      //   let body = {
      //     name: "title task",
      //     project_id: project_id,
      //     columntask_id: id,
      //   };
      //   try {
      //     let response = await fetch(`${store.URL_BASE}/task`, {
      //       method: "POST",
      //       headers: {
      //         "Content-type": "application/json",
      //         Authorization: `Bearer ${store.token}`,
      //       },
      //       body: JSON.stringify(body),
      //     });
      //     if (response.ok) {
      //       actions.handleTasks(id);
      //     }
      //   } catch (error) {
      //     console.log("ocurrio un error", error);
      //   }
      // },
      handleModalTasks: async (id) => {
        let store = getStore();
        try {
          let response = await fetch(`${store.URL_BASE}/task/${id}`, {
            method: "GET",
            headers: {
              "Content-type": "application/json",
            },
          });
          if (response.ok) {
            let data = await response.json();
            setStore({
              ...store,
              modalTask: data,
            });
          }
        } catch (error) {
          console.log("error");
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

      newTask: async (id, project_id) => {
        let store = getStore();
        let actions = getActions();
        let body = {
          name: "",
          project_id: project_id,
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

      handleUpdateTask: async (id, title, task_id, content, priority) => {
        let store = getStore();
        let actions = getActions();
        let body = {
          id: task_id,
          name: title,
          description: content,
          columntask_id: id,
          priority: priority
        };
        try {
          let response = await fetch(`${store.URL_BASE}/task`, {
            method: "PATCH",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (response.ok) {
            actions.handleTasks();
          } else {
            window.alert(
              "This Favorite already exists in your list, enter a different one!"
            );
          }
          console.log(id, title, task_id)
      } catch {
        console.log(error);
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
          column_id: column_id,
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
              actions.getColumn(project_id, column_id);
            } else {
              window.alert(
                "This Favorite already exists in your list, enter a different one!"
              );
            }
        } catch {
          console.log(error);
        }
      },
      handleDeleteColumn: async (column_id, project_id) => {
        let store = getStore();
        let actions = getActions();
        let body = {
          column_id: column_id,
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
        let store = getStore(id);
        try {
          const response = await fetch(`${store.URL_BASE}/newproject`, {
            method: "POST",
            body: JSON.stringify(project),
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${store.token}`,
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
          }else{
            console.log("No es miembro de un proyecto")
          }
        } catch (error) {
          console.log("Hubo un error", error);
        }
      },
    },
  };
};

export default getState;

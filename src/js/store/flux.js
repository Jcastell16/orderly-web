const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
		URL_BASE: "http://127.0.0.1:3000",
    token: localStorage.getItem("token") || "",
    tasks: JSON.parse(localStorage.getItem("tasks")) || [] 
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

      handleLogin: async(login)=>{
				let store = getStore()
				const response = await fetch(`${store.URL_BASE}/login`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(login)
				})
				let data = await response.json()
				if (response.ok) {
					setStore({
						...store,
						token: data.token
					})
					localStorage.setItem("token", data.token)
				}else {
					console.log("ocurrio un error")
				}
      },


      handleTasks: async()=>{
        let store= getStore()
        try{
          let response = await fetch(`${store.URL_BASE}/task`, {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              "Authorization": `Bearer ${store.token}`
            }
          })
          if (response.ok){
            let data = await response.json()
            setStore({
              ...store,
              tasks: data
            })
            console.log(data)
            localStorage.setItem("tasks", JSON.stringify(data))
          }
        }
        catch(error){
          console.log("error")
        }
      }

    },
  };
};

export default getState;

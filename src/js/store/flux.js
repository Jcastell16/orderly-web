const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			URL_BASE: "http://127.0.0.1:3000",
			token: localStorage.getItem("token") || "",
			tasks: JSON.parse(localStorage.getItem("tasks")) || [],
			columnboard: [],
			project: []
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
				} else {
					console.log("ocurrio un error")
				}
			},


			handleTasks: async () => {
				let store = getStore()
				try {
					let response = await fetch(`${store.URL_BASE}/task`, {
						method: "GET",
						headers: {
							"Content-type": "application/json",
							"Authorization": `Bearer ${store.token}`
						}
					})
					if (response.ok) {
						let data = await response.json()
						setStore({
							...store,
							tasks: data
						})
						console.log(data)
						localStorage.setItem("tasks", JSON.stringify(data))
					}
				}
				catch (error) {
					console.log("error")
				}
			},
		
		getColumn: async () => {
			let store = getStore();
			try {
				let response = await fetch(`${store.URL_BASE}/column`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					}
				})
				if (response.ok) {
					let data = await response.json()
					setStore({
						...store,
						columnboard: data
					});
				}
			} catch (error) {
				console.log("Error try again later!!", error)
			}
		},
		handleNewColumn: async () => {
			let store = getStore();
			let actions = getActions();
			let body = {
				name: "Title...",
				project_id: 1
			};
			try {
				let response = await fetch(`${store.URL_BASE}/column`, {
					method: 'POST',
					body: JSON.stringify(body),
					headers: {
						"Content-Type": "application/json",
					}
				})
				if (response.ok) {
					actions.getColumn()
				}
				else {
					window.alert("This Favorite already exists in your list, enter a different one!")
				}
			} catch (error) {
				console.log("Error try again later!!", error)
			}
		},
		handleDeleteColumn: async (id) => {
			let store = getStore()
			let actions = getActions()
			console.log(id)
			let body = {
				"id": id,
			}
			try {
				let response = await fetch(`${store.URL_BASE}/column`, {
					method: 'DELETE',
					body: JSON.stringify(body),
					headers: {
						"Content-Type": "application/json",
					},
				})
				if (response.ok) {
					actions.getColumn()
				}
			} catch (error) {
				console.log("Error try again later!!", error)
			} s
		},

		prueba: () => {
			let store = getStore()

			setStore({
				...store, task: [{
					id: 1,
					name: "Juan"
				}]
			})
		},

		handle_newProject: async (project) => {
			let store = getStore();
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
			}
		}
	   
	};
	
}

export default getState;

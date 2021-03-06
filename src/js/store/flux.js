const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
		URL_BASE: "http://127.0.0.1:3000"
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
    },
  };
};

export default getState;

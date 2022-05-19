import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../views/home";

const initialState = {
  email: "",
  rol: "",
};

export const Newproject = () => {
  const { store, actions } = useContext(Context);
  
  const [isGroup, setIsGroup] = useState("");

  const [member, setMember] = useState(initialState);
  const [memberList, setMemberList] = useState([]);

  const [users, setUsers] = useState([]);

  const [project, setproject] = useState({
    name: "",
    due_date: "",
    description: "",
  });

  const handleOnChange = (value) => {
    setIsGroup(value);
    if (value == "individual") {
      setMemberList([]);
    }
  };
  const handleChangeMember = (event) => {
    setMember({ ...member, [event.target.name]: event.target.value });
    getUsers(member.email);
  };

  const updateMember = () => {
    if (users.email.length > 0) {
      if (member.email.trim() != "" && member.rol.trim() != "") {
        let repeatMember = memberList.filter(
          (item, index) => item.email == member.email
        );
        if (repeatMember.length == 0) {
          setMemberList([...memberList, member]);
        }
      }
    }
  };

  const deleteMember = (id) => {
    let newListMember = memberList.filter((item, index) => index != id);
    setMemberList(newListMember);
  };

  const onSuggestHandler = (users) =>{
    setMember(users)
    setUsers([])
  }
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
  console.log(memberList, project)
  return (
    <>
      <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <p className="h1 fw-bold mb-3 mx-1 mx-md-2 mt-1">
                    Nuevo Proyecto
                  </p>
                  <form className="row g-3 needs-validation">
                    <div className="col-md-6">
                      <label className="form-label">Nombre</label>
                      <div className="input-group has-validation">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          required
                          onChange={(event) =>
                            setproject({
                              ...project,
                              [event.target.name]: event.target.value,
                            })
                          }
                        />
                        <div className="invalid-feedback">
                          Por favor coloque un nombre al proyecto
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Fecha culminación</label>
                      <div className="col-5">
                        <div className="input-group date" id="datepicker">
                          <DatePicker
                            wrapperClassName="datePicker"
                            selected={project.due_date}
                            onChange={(date) =>
                              setproject({ ...project, due_date: date })
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row d-flex">
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
                        <label
                          className="form-check-label"
                          htmlFor="inlineRadio1"
                        >
                          Individual
                        </label>
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
                        <label
                          className="form-check-label"
                          htmlFor="inlineRadio2"
                        >
                          Grupal
                        </label>
                      </div>
                    </div>
                  </form>
                  <form className="row g-3 d-flex">
                    {isGroup == "grupal" ? (
                      <>
                        <div className="col-md-6">
                          <label className="form-label">Miembros</label>
                          <input
                            type="email"
                            className="form-control"
                            id="miembros"
                            name="email"
                            value={member.email}
                            onChange={handleChangeMember}
                            // onBlur = {()=>{
                            //   setTimeout(()=>{
                            //     setUsers([])
                            //   },100);
                            // }}
                          />
                          {/* {users.email &&
                            users.email.map((users, i) => (
                              <div key={i} className=" suggestion col-md-12" onClick={()=> onSuggestHandler(users.email)}>
                                {users.email}
                              </div>
                            ))} */}
                        </div>
                        <div className="col-md-4">
                          <label className="form-label">Rol</label>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            value={member.rol}
                            name="rol"
                            onChange={handleChangeMember}
                          >
                            <option defaultValue></option>
                            <option value="Adminitrador"> Adminitrador </option>
                            <option value="Usuario"> Usuario </option>
                          </select>
                        </div>
                        <div className="me-3">
                          <button
                            className="btn btn-outline-success"
                            type="button"
                            onClick={updateMember}
                          >
                            <i className="fas fa-check"></i>
                          </button>
                        </div>
                        {memberList.map((item, index) => (
                          <div key={index} className="border-bottom w-100 mt-2">
                            <ul className="list-group list-group-flush vertical-align">
                              <li className="list-group-item d-flex justify-content-between">
                                {item.email} {item.rol}
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
                      </>
                    ) : (
                      ""
                    )}
                    <div className="col-md-8">
                      <label className="form-label">Descripción</label>
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
                    <div className="col-md-12">
                      <Link
                        className="btn btn-secondary"
                        to="/workspace"
                        type="submit"
                        onClick={() =>
                          actions.handle_newProject(project)
                        }
                      >
                        <span>Guardar</span>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

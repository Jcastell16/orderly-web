import React, { useContext, useState } from "react"
import { Context } from "../store/appContext"

const Login = () => {
    const { actions } = useContext(Context)
    const [login, setLogin] = useState({
        email: "",
        password: ""
    })
    return (
        <>
            <div className="container">
                <form>
                    <div className="row mb-3 justify-content-center">
                        <label className="col-1">Email:</label>
                        <div className="col-4">
                            <input type="email" className="form-control" name="email"  onChange={(event) => setLogin({ ...login, [event.target.name]: event.target.value })} />
                        </div>
                    </div>
                    <div className="row mb-3 justify-content-center">
                        <label className="col-1">Password:</label>
                        <div className="col-4">
                            <input type="password" className="form-control" name="password" onChange={(event) => setLogin({ ...login, [event.target.name]: event.target.value })} />
                        </div>
                    </div>
                    <div className="row mb-3 justify-content-center">
                        <button type="button" className="btn btn-secondary col-1" onClick={() => actions.handleLogin(login)}>login</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Login
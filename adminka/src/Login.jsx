import { useState } from 'react'

import './App.css'

 function Login() {
    const [createPasswordValue, setcreatepasswordValue] = useState('')
    const [adminValue, setadminValue] = useState('')
    const [passwordValue, setpasswordValue] = useState('')





    return (
        <div className="loginPage">
            <div className="loginContainer">
                <div className="adminCreation">
                    <h3>Create Admin Password</h3>
                    <div className="inputGroup">
                        <input
                            type="password"
                            value={createPasswordValue}
                            placeholder="Enter new password..."
                            className="inputField"
                            // onChange={(event) => {
                            //     setcreatepaswordValue(event.target.value)
                            // }}
                        />
                        <button
                            onClick={() => createAdminPassword()}
                            className="generateBtn"
                        >
                            Generate Admin
                        </button>
                    </div>
                </div>

                <div className="loginSection">
                    <h2>Admin Login</h2>
                    <div className="inputGroup">
                        <input
                            type="text"
                            placeholder="Username"
                            value={adminValue}
                            className="inputField"
                            // onChange={(event) => {
                            //     setadminValue(event.target.value)
                            // }}
                        />
                    </div>
                    <div className="inputGroup">

                        <input
                            type="password"
                            placeholder="Password"
                            value={passwordValue}
                            className="inputField"
                            // onChange={(event) => {
                            //     setpaswordValue(event.target.value)
                            // }}
                        />
                    </div>
                    <button
                        onClick={() => setLogin()}
                        className="loginBtn"
                    >
                        Log In
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Login;
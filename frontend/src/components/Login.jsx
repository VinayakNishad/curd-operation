import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import "./login.css"
const Login = () => {
    const [admin_email, setEmail] = useState("");
    const [admin_password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        axios.post("http://localhost:3001/login", { admin_email, admin_password }, {
            headers: { "Content-Type": "application/json" }
        })
        .then(result => {
            console.log("Login Success:", result.data);
            navigate("/admin_home");
        })
        .catch(err => {
            console.error("Login Error:", err.response?.status, err.response?.data || "Unknown Error");
        });
    };

    return (
        <div className='login-container'>
            <div className='login-card'>
                <form onSubmit={handleLogin}>
                    <h2 className='login-title'>Admin Login</h2>
                    <div className="form-group">
                        <input
                            name='admin_email'
                            type="email"
                            placeholder='Enter Email'
                            className='form-input'
                            id='admin_email'
                            autoComplete='off'
                            value={admin_email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            name='admin_password'
                            placeholder='Enter Password'
                            className='form-input'
                            id='admin_password'
                            value={admin_password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <button className="login-button">Login</button>
                    </div>
                    <Link className="signup-link" to="/">Don't have an account? Go Back</Link>
                </form>
            </div>
        </div>
    );
};

export default Login;

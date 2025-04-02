import React, { useState } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [admin_email, setEmail] = useState("");
    const [admin_password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
    
        axios.post("http://localhost:3001/login", { admin_email, admin_password }, {
            headers: { "Content-Type": "application/json" } // Ensure correct format
        })
        .then(result => {
            console.log("Login Success:", result.data);
            navigate("/home");
        })
        .catch(err => {
            console.error("Login Error:", err.response?.status, err.response?.data || "Unknown Error");
        });
    };
    
    
    return (
        <div className='d-flex bg-light vh-100 justify-content-center align-items-center '>
            <div className='w-50 bg-white rounded p-3 text-center shadow-lg'>
                <form onSubmit={handleLogin}>
                    <h2 className='m-3'>Login</h2>
                    <div className="mb-3">
                        <input name='admin_email' type="email" placeholder='Enter Email' className='form-control' id='admin_email' autoComplete='off' Lowercase
                            value={admin_email} onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <input type="password" name='admin_password' placeholder='Enter Password' className='form-control' id='admin_password'
                            value={admin_password} onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-success fw-bold mb-3 w-100">Login</button>
                    </div>
                    <Link to="/">Don't have an account? Sign Up</Link>
                </form>
            </div>
        </div>
    );
};

export default Login;

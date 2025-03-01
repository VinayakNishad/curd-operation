import React, { useState } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
    
        axios.post("http://localhost:3001/login", { email, password }, {
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
        <div className='d-flex bg-success vh-100 justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleLogin}>
                    <h2>Login</h2>
                    <div className="mb-2">
                        <label htmlFor="email">Email</label>
                        <input name='email' type="email" placeholder='Enter Email' className='form-control' id='email' autoComplete='off'
                            value={email} onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' placeholder='Enter Password' className='form-control' id='password'
                            value={password} onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-primary fw-bold mb-3">Login</button>
                    <Link to="/">Don't have an account? Sign Up</Link>
                </form>
            </div>
        </div>
    );
};

export default Login;

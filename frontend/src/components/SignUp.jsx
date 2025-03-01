import React, { useState } from 'react'
import axios  from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from 'react-router-dom';
const signUp = () => {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const navigate=useNavigate();

    const Submit=(e)=>{
        e.preventDefault();
       axios.post("http://localhost:3001/",{name,email,password})
        .then(result=>{
            console.log(result)
            navigate("/login") })
        .catch(err=>console.log(err))}
  return (
    <div className='d-flex bg-success vh-100 justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={Submit}>
                <h2>Add user</h2>
                <div className="mb-2">
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder='Enter Name' className='form-control'
                        value={name} onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <div className="mb-2">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Enter Email' className='form-control'
                        value={email} onChange={(e)=>{setEmail(e.target.value)}}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="password">Age</label>
                    <input type="password" placeholder='Enter Password' className='form-control'
                        value={password} onChange={(e)=>{setPassword(e.target.value)}}
                    /></div>
                <button className="btn btn-success fw-bold mb-3">Submit</button></form>
                <Link to="/login">Already have an account? Login</Link>
        </div></div>)}
export default signUp

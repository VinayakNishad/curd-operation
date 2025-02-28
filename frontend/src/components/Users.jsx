import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
const Users = () => {
    const[users,setUsers]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3001')
        .then(result=>setUsers(result.data))
        .catch(error=>console.log(err))
    },[])
    const handleDelete=id=>{
        axios.delete('http://localhost:3001/deleteUser/'+id)
        .then(res=>{
            console.log(res)
            window.location.reload()
        })
        .catch(err=>console.log(err))
    }
  return (
    <div className='d-flex vh-100 bg-success justify-content-center align-items-center'>
        <div className="w-50 bg-white rounded p-3">
            <Link to="/createUser" className="btn btn-success fw-bold mb-3">Add +</Link>
            <table className="table">
                <thead>
                    <tr><th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Action</th></tr>
                </thead>
                <tbody>
                    {
                        users.map((user,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>
                                        <Link to={`/updateUser/${user._id}`} className="btn btn-success">Update</Link>
                                        <button className="btn btn-danger ms-3" onClick={e=>handleDelete(user._id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}


export default Users
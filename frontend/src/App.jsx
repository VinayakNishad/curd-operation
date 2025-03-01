import React from 'react'
import {BrowserRouter,Routes,Route} from  "react-router-dom"
import Users from './components/Users';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from './components/SignUp';
import Login from './components/Login';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp/>}></Route>
          <Route path='/createUser/' element={<CreateUser/>}></Route>
          <Route path='/updateUser/:id' element={<UpdateUser/>}></Route>
          <Route path='/home' element={<Users/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App
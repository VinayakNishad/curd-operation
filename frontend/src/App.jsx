import React from 'react'
import {BrowserRouter,Routes,Route} from  "react-router-dom"
import Users from './components/Users';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users/>}></Route>
          <Route path='/createUser/' element={<CreateUser/>}></Route>
          <Route path='/updateUser/:id' element={<UpdateUser/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App
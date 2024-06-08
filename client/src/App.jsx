import React from 'react'
import Login from './pages/auth/Login'
import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/auth/SignUp'
import Dashboard from './pages/dashboard/Dashboard'

const App = () => {
  return (
    <div>

      
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/' element={<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default App
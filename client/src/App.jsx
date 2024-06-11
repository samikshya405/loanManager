import React from 'react'
import Login from './pages/auth/Login'
import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/auth/SignUp'
import Dashboard from './pages/dashboard/Dashboard'
import Recieved from './pages/recieved/Recieved'
import Given from './pages/given/Given'
import Paid from './pages/paid/Paid'
import People from './pages/people/People'
import Profile from './component/table/Profile'

const App = () => {
  return (
    <div>

      
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/recieved' element={<Recieved/>}/>
        <Route path='/given' element={<Given/>}/>
        <Route path='/paid' element={<Paid/>}/>
        <Route path='/people' element={<People/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </div>
  )
}

export default App
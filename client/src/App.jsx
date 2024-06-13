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
import ScrollToTop from './component/scroll/ScrollToTop'
import PrivateRoute from './private/PrivateRoute'

const App = () => {
  return (
    <div>

      <ScrollToTop/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/' element={<PrivateRoute element={<Dashboard />} />} />
        <Route path='/recieved' element={<PrivateRoute element={<Recieved />} />} />
        <Route path='/given' element={<PrivateRoute element={<Given />} />} />
        <Route path='/paid' element={<PrivateRoute element={<Paid />} />} />
        <Route path='/people' element={<PrivateRoute element={<People />} />} />
        <Route path='/profile' element={<PrivateRoute element={<Profile />} />} />
      </Routes>
    </div>
  )
}

export default App
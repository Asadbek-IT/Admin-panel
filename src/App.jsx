import React, { useEffect } from 'react'
import LoginPage from './pages/LoginPage';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

const App = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    useEffect(() => {
      if(token){
        navigate("/dashboard")
      }else{
        navigate("/login")
      }
    }, [token]);


  return (
    <div>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default App

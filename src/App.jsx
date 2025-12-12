import React, { useEffect } from 'react'
import LoginPage from './pages/LoginPage';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Copyboard from "./components/ui/Copyboard";
import Products from "./components/ui/Products";
import Users from "./components/ui/Users";
import Profile from "./components/ui/Profile";
import Settings from "./components/ui/Settings";

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
      </Routes>

      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}>
          <Route path='/dashboard/dashboard-main' element={<Copyboard/>}/>
          <Route path='/dashboard/products' element={<Products/>}/>
          <Route path='/dashboard/users' element={<Users/>}/>
          <Route path='/dashboard/profile' element={<Profile/>}/>
          <Route path='/dashboard/settings' element={<Settings/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App

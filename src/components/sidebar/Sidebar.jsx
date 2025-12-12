import React from 'react'
import toast from 'react-hot-toast';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';

const Sidebar = () => {

  const navigate = useNavigate();

    const LogOut = () =>{
      localStorage.removeItem("token");
      navigate("/login");
      toast.info('succsesfull log out', {
        position: "top-center"
      })
    }

  return (
    <div className='w-50 h-screen bg-gray-800 shadow-xl '>
      <ul>
        <li>
          <NavLink to="/dashboard/dashboard-main">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/products">Prodeucts</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/users">Users</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/settings">Settings</NavLink>
        </li>
      </ul>

      <p onClick={LogOut} >Log out</p>
    </div>
  )
}

export default Sidebar

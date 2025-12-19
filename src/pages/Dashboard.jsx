import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import { Outlet, Route, Routes } from "react-router-dom";
import Copyboard from "../components/ui/Copyboard";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <main className='min-h-screen bg-gray-900 p-8 text-white'>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

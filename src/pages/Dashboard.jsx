import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import { Outlet, Route, Routes } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

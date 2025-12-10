import React from 'react'
import Sidebar from "../components/sidebar/Sidebar"
import Navbar from '../components/navbar/Navbar'
import Table from '../components/ui/Table'


const Dashboard = () => {
  return (
    <div className="flex">
  
    <Sidebar/>

  <div className="flex-1">
    
      <Navbar/>

    <main>
      <Table/>
    </main>
    
  </div>

</div>
  )
}

export default Dashboard

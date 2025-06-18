import React from 'react';
import '../pages/Dashboard.css'
import '../pages/Admin/Sidebar.jsx'
import Sidebar from '../pages/Admin/Sidebar.jsx';
import Add from '../pages/Admin/Add.jsx';
import List from '../pages/Admin/List.jsx';
import Orders from '../pages/Admin/Orders.jsx'
import { Route, Routes } from 'react-router-dom';

function Dashboard (){
  return (
    <div className='dashboard-container'>
     <Sidebar/>
     <div className="dashboard-main">
      <Routes>
        <Route path='add' element ={<Add/>}/>
        <Route path='list' element ={<List/>}/>
        <Route path='orders' element ={<Orders/>}/>
         <Route index element={<h2>Welcome to the Dashboard</h2>} />
      </Routes>
     </div>
    </div>
  )
}

export default Dashboard  



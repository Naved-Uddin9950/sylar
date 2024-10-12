import { useState } from 'react';
import './App.css';
import Navbar from './utils/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  

  return (
    <div className='w-full h-full min-h-screen min-w-screen bg-gray-900 text-white overflow-hidden'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App

// File: Index.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import TandC from './TandC';
import About from './Aboutus';
import Dashboard2 from './Dashboard2';
function Index() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
       
        
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/terms' element={<TandC/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/dashboard2' element={<Dashboard2/>}></Route>


          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Index;
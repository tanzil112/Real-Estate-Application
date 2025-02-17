import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import TandC from './TandC';
import About from './Aboutus';
import UserDashboard from './UserDashboard';
import LocationSearch from './LocationSearch';
import SearchResults from './SearchResults';

function Index() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/terms" element={<TandC />} />
          <Route path="/about" element={<About />} />
          <Route path="/userdashboard" element={<UserDashboard />} />

          {/* Location Search Feature */}
          <Route path="/search" element={<SearchResults />} />
          <Route path="/location-search" element={<LocationSearch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Index;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import TandC from './TandC';
import About from './Aboutus';
import UserDashboard from './UserDashboard';
import SellerDashboard from './SellerDashboard';
import SellerPropertyList from './SellerpropertyList';
import LocationSearch from './LocationSearch';
import SearchResults from './SearchResults';
import PropertyDetails from './PropertyDetails';
import ContOwn from './ContOwn';
import Contact from './Contact';
import Services from './Services';
import Payment from './Payment';

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
          
          <Route path="/owner" element={<ContOwn />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/payment" element={<Payment />} />

          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="/sellerdashboard" element={<SellerDashboard />} />

          <Route path="/sellerdashboard" element={<SellerDashboard />} />
          <Route path="/sellerpropertylist" element={<SellerPropertyList />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          helllllll


          {/* Location Search Feature */}
          <Route path="/search" element={<SearchResults />} />
          <Route path="/location-search" element={<LocationSearch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Index;

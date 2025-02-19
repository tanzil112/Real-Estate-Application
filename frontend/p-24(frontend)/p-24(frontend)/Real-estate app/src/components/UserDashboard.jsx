import React from 'react';
import Navbar from './Navbar';

const UserDashboard = () => {
  return (
    <>
      {/* Pass hideAuthLinks as true to hide auth buttons */}
      <Navbar hideAuthLinks={true} />
    </>
  );
};

export default UserDashboard;

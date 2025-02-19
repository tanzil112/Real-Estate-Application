import React from 'react';
import Navbar from './Navbar';

const UserDashboard = () => {
  return (
    <>
      {/* Pass hideAuthLinks as true to hide auth buttons */}
      <Navbar hideAuthLinks={true} hideAuthLinks2={true} />
    </>
  );
};

export default UserDashboard;

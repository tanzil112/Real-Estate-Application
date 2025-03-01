import React, { useState } from 'react';
import Navbar from './Navbar';
const AdminDashboard = () => {
    const [properties, setProperties] = useState(['Property 1', 'Property 2']);
    const [users, setUsers] = useState(['User 1', 'User 2']);
    const [inquiries, setInquiries] = useState([
        { id: 1, message: 'Inquiry 1', status: 'Open' },
        { id: 2, message: 'Inquiry 2', status: 'Closed' }
    ]);
    const [analytics, setAnalytics] = useState({
        totalVisits: 1024,
        activeUsers: 230,
        sales: 56
    });

    const [newProperty, setNewProperty] = useState('');
    const [newUser, setNewUser] = useState('');

    const addProperty = () => {
        if (newProperty.trim()) {
            setProperties([...properties, newProperty]);
            setNewProperty('');
        }
    };

    const addUser = () => {
        if (newUser.trim()) {
            setUsers([...users, newUser]);
            setNewUser('');
        }
    };

    const deleteProperty = (index) => {
        const updatedProperties = properties.filter((_, i) => i !== index);
        setProperties(updatedProperties);
    };

    const deleteUser = (index) => {
        const updatedUsers = users.filter((_, i) => i !== index);
        setUsers(updatedUsers);
    };

    return (
        <>
        <Navbar hideAuthLinks={true} hideAuthLinks2={true} />
        <div className="dashboard-container">
           
                <main className="main-content">
               
                    <h1>Welcome to Admin Dashboard</h1>
              
                <section className="stats">
                    <div className="stat-card">Total Properties: {properties.length}</div>
                    <div className="stat-card">Total Users: {users.length}</div>
                    <div className="stat-card">Open Inquiries: {inquiries.filter(i => i.status === 'Open').length}</div>
                </section>
                <section className="management">
                    <h2>Manage Properties</h2>
                    <input 
                        type="text" 
                        value={newProperty} 
                        onChange={(e) => setNewProperty(e.target.value)} 
                        placeholder="Add new property" 
                    />
                    <button onClick={addProperty}>Add Property</button>
                    <ul>
                        {properties.map((property, index) => (
                            <li key={index}>
                                {property} <button onClick={() => deleteProperty(index)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                    <h2>Manage Users</h2>
                    <input 
                        type="text" 
                        value={newUser} 
                        onChange={(e) => setNewUser(e.target.value)} 
                        placeholder="Add new user" 
                    />
                    <button onClick={addUser}>Add User</button>
                    <ul>
                        {users.map((user, index) => (
                            <li key={index}>
                                {user} <button onClick={() => deleteUser(index)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                    <h2>Inquiries</h2>
                    <ul>
                        {inquiries.map(inquiry => (
                            <li key={inquiry.id}>{inquiry.message} - {inquiry.status}</li>
                        ))}
                    </ul>
                    <h2>Analytics</h2>
                    <p>Total Visits: {analytics.totalVisits}</p>
                    <p>Active Users: {analytics.activeUsers}</p>
                    <p>Sales: {analytics.sales}</p>
                </section>
            </main>
        </div>
        </>
    );
};

export default AdminDashboard;

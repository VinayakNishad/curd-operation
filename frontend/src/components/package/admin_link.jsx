import React from 'react';
import { Link } from 'react-router-dom';// Optional: for styling

const AdminLink = () => {
    return (
        <div className="admin-home-container">
            <h1 className="admin-title">Admin Dashboard</h1>
            <nav className="admin-nav">
                <Link to="/addStudios" className="admin-link">Add Studio</Link>
                <Link to="/uploadImages" className="Upload ">Manage Users</Link>
                <Link to="/admin/bookings" className="admin-link">View Bookings</Link>
                <Link to="/admin/reports" className="admin-link">Reports</Link>
                <Link to="/admin/settings" className="admin-link">Settings</Link>
                <Link to="/" className="admin-link logout">Logout</Link>
            </nav>
        </div>
    );
};

export default AdminHome;

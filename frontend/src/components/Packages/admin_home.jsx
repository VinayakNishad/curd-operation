import React, { useEffect, useState } from "react";
import axios from "axios";
import "./admin_home.css"; // Optional: for styling

const AdminDashboard = () => {
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const response = await axios.get("http://localhost:3001/admin_home");
        setEnquiries(response.data);
      } catch (error) {
        console.error("Error fetching admin data:", error);
      }
    };

    fetchEnquiries();
  }, []);

  return (
    <div className="container">
      <h2>Admin Dashboard - User Enquiries</h2>
      {enquiries.length === 0 ? (
        <p>No enquiries found.</p>
      ) : (
        <div className="card-grid">
          {enquiries.map((entry, index) => (
            <div className="card" key={index}>
              <div className="card-body">
                <h3>User Info</h3>
                <p><strong>Name:</strong> {entry.user_name}</p>
                <p><strong>Email:</strong> {entry.email}</p>
                <p><strong>Location:</strong> {entry.location}</p>
                <p><strong>Phone:</strong> {entry.phone}</p>

                <h3>Package Info</h3>
                {entry.packageDetails ? (
                  <>
                    <p><strong>Package Name:</strong> {entry.packageDetails.package_name}</p>
                    <p><strong>Price:</strong> ₹{entry.packageDetails.package_price}</p>
                    <p><strong>Description:</strong> {entry.packageDetails.package_description}</p>
                  </>
                ) : (
                  <p style={{ color: "red" }}>Package not found</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;

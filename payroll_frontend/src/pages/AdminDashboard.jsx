import React from "react";
import "../styles/Dashboard.css";

function AdminDashboard() {
  return (
    <div className="dashboard d-flex flex-column align-items-center justify-content-center">
      <div className="dashboard-card text-center col-6">
        <h1>Welcome Admin</h1>
        <p className="lead">Manage employees, payrolls, and system settings.</p>
        <div className="d-flex justify-content-around mt-4">
          <a href="/employees" className="btn btn-success">Manage Employees</a>
          <a href="/payroll" className="btn btn-info">Manage Payroll</a>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;

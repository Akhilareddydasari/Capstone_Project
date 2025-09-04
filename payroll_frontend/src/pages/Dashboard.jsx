import React from "react";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard d-flex flex-column align-items-center justify-content-center">
      <div className="dashboard-card text-center col-6">
        <h1>Welcome to Payroll Dashboard</h1>
        <p className="lead">Manage Employees & Payroll Easily</p>
      </div>
    </div>
  );
}

export default Dashboard;

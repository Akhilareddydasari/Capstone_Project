import React from "react";
import "../styles/Dashboard.css";

function UserDashboard() {
  return (
    <div className="dashboard d-flex flex-column align-items-center justify-content-center">
      <div className="dashboard-card text-center col-6">
        <h1>Welcome Employee</h1>
        <p className="lead">Here you can view your payslips and profile details.</p>
        <div className="d-flex justify-content-around mt-4">
          <a href="/payslip" className="btn btn-primary">View Payslip</a>
          <a href="/profile" className="btn btn-secondary">Profile</a>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;

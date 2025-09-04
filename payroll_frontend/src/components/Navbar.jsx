import React from "react";
import { Link } from "react-router-dom";
import { FaUserTie, FaMoneyBillWave, FaSignOutAlt, FaTachometerAlt } from "react-icons/fa";

function Navbar() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/dashboard">
        Payroll System
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard"><FaTachometerAlt /> Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/employees"><FaUserTie /> Employees</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/payroll"><FaMoneyBillWave /> Payroll</Link>
          </li>
          <li className="nav-item">
            <button className="btn btn-danger ms-2" onClick={handleLogout}><FaSignOutAlt /> Logout</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AdminDashboard from "./pages/AdminDashboard";
import EmployeePage from "./pages/EmployeePage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import PayrollPage from "./pages/PayrollPage";
import PayslipPage from "./pages/PayslipPage";
import RegisterPage from "./pages/RegisterPage";
import UserDashboard from "./pages/UserDashboard";
import "./styles/Dashboard.css";
import LandingPage from "./pages/LandingPage";

function App() {
  const userRole = localStorage.getItem("role");

  return (
    <>
      <Navbar />
      <Routes>
        {/* Default route */}
        <Route path="" element={<LandingPage/>} />

        {/* Auth routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Role-based dashboards */}
        {userRole === "ADMIN" && (
          <Route path="/dashboard" element={<AdminDashboard />} />
        )}
        {userRole === "EMPLOYEE" && (
          <Route path="/dashboard" element={<UserDashboard />} />
        )}

        {/* Shared pages */}
        <Route path="/employees" element={<EmployeePage />} />
        <Route path="/payroll" element={<PayrollPage />} />
        <Route path="/payslip" element={<PayslipPage />} />

        {/* Catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

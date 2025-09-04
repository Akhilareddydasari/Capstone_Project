import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import bgImage from "../assets/bg.jpg"; 
import "../styles/LandingPage.css";
// Reusable Button component
function Button({ children, className }) {
  return (
    <button
      className={`px-6 py-2 rounded-2xl font-medium shadow-md transition transform hover:scale-105 ${className}`}
    >
      {children}
    </button>
  );
}

export default function LandingPage() {
  return (
    <div
      className="landing-container relative flex flex-col"
      style={{ backgroundImage: `url(${bgImage})`,
     }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-70" />

      {/* Top-right navigation */}
      <div className="absolute top-6 right-10 flex space-x-4 z-10">
        <Link to="/login">
          <Button className="bg-white/80 text-gray-900 hover:bg-white">
            Login
          </Button>
        </Link>
        <Link to="/register">
          <Button className="bg-white/80 text-gray-900 hover:bg-white">
            Register
          </Button>
        </Link>
        <Link to="/dashboard">
          <Button className="bg-white/80 text-gray-900 hover:bg-white">
            Dashboard
          </Button>
        </Link>
      </div>

      {/* Center content */}
     <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="flex flex-col items-center justify-center h-full relative z-10 text-center px-6"
>
  <h1 className="landing-title text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
    Payroll Management System
  </h1>
  <p className="landing-subtitle mt-4">
    A secure and scalable enterprise platform for managing employees, payroll,
    and performance — all in one place.
  </p>

  <Link to="/dashboard">
    <Button className="landing-btn mt-8 px-8 py-3 text-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      Explore Dashboard
    </Button>
  </Link>
</motion.div>

    </div>
  );
}

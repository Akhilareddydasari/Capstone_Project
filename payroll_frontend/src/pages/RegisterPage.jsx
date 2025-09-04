import React, { useState } from "react";
import { register } from "../services/api";
import TooltipInput from "../components/TooltipInput";
import "../styles/Register.css";

function RegisterPage() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(form);
      const res = await register(form);
      localStorage.setItem("token", res.data.token);
      window.location.href = "/dashboard";
    } catch (err) {
      alert("Registration failed!");
    }
  };

  return (
    <div className="dashboard d-flex justify-content-center align-items-center">
      <div className="card p-4 dashboard-card col-4">
        <h2 className="mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <input id="username" name="username" label="Username" type="text" placeholder="Enter username"
            tooltip="Choose a unique username" onChange={handleChange}   />
          <input id="email" label="Email" name="email" type="email" placeholder="Enter email"
            tooltip="Enter a valid email address" onChange={handleChange}   />
          <input id="password" label="Password" name="password" type="password" placeholder="Enter password"
            tooltip="Use at least 6 characters" onChange={handleChange}   />
          <button className="btn btn-success w-100">Register</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;

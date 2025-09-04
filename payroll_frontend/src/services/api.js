// services/api.js
import axios from "axios";

const API_URL = "http://localhost:8080/api/v1";

const api = axios.create({
  baseURL: API_URL,
});

// ✅ Attach JWT token automatically if present
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ======================= AUTH =======================

// Register new user
export const register = (userData) => api.post("/auth/register", userData);

// Login user
export const login = (credentials) => api.post("/auth/login", credentials);

// Get current logged-in user
export const getCurrentUser = () => api.get("/auth/me");

// ======================= EMPLOYEES =======================

// Create new employee
export const createEmployee = (employeeData) => api.post("/employees", employeeData);

// Get all employees
export const getEmployees = () => api.get("/employees");

// Get single employee by ID
export const getEmployeeById = (id) => api.get(`/employees/${id}`);

// Update employee
export const updateEmployee = (id, updatedData) => api.put(`/employees/${id}`, updatedData);

// Delete employee
export const deleteEmployee = (id) => api.delete(`/employees/${id}`);

// ======================= PAYROLL =======================

// Generate payroll for employee
export const createPayroll = (payrollData) => api.post("/payroll", payrollData);

// Get all payroll records
export const getPayrolls = () => api.get("/payroll");

// Get payroll by employee ID
export const getPayrollByEmployee = (employeeId) => api.get(`/payroll/employee/${employeeId}`);

// ======================= PAYSLIP =======================

// Get payslip by payroll ID
export const getPayslip = (payrollId) => api.get(`/payroll/${payrollId}/payslip`);

// ======================= DEPARTMENTS =======================

// Get all departments
export const getDepartments = () => api.get("/departments");

// Create new department
export const createDepartment = (departmentData) => api.post("/departments", departmentData);

// ======================= JOBS =======================

// Get all jobs
export const getJobs = () => api.get("/jobs");

// Create new job
export const createJob = (jobData) => api.post("/jobs", jobData);


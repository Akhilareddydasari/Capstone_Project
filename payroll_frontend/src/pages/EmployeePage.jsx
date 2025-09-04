import React, { useEffect, useState } from "react";
import { getEmployees, createEmployee } from "../services/api";
import DateInput from "../components/DateInput";

function EmployeePage() {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({ name: "", position: "" });
  const [joinDate, setJoinDate] = useState(new Date());

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const res = await getEmployees();
    setEmployees(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createEmployee({ ...form, joinDate });
    loadEmployees();
  };

  return (
    <div className="container mt-4">
      <h2>Employees</h2>
      <form onSubmit={handleSubmit} className="card p-3 mb-4">
        <input
          type="text"
          placeholder="Name"
          className="form-control mb-2"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Position"
          className="form-control mb-2"
          value={form.position}
          onChange={(e) => setForm({ ...form, position: e.target.value })}
        />
        <DateInput label="Join Date" selectedDate={joinDate} setSelectedDate={setJoinDate} />
        <button className="btn btn-primary">Add Employee</button>
      </form>

      <ul className="list-group">
        {employees.map((emp) => (
          <li className="list-group-item" key={emp.id}>
            {emp.name} - {emp.position}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeePage;

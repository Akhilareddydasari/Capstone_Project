import React, { useEffect, useState } from "react";
import { getPayrolls, createPayroll } from "../services/api";
import DateInput from "../components/DateInput";

function PayrollPage() {
  const [payrolls, setPayrolls] = useState([]);
  const [form, setForm] = useState({ employeeId: "", amount: "" });
  const [payDate, setPayDate] = useState(new Date());

  useEffect(() => {
    loadPayrolls();
  }, []);

  const loadPayrolls = async () => {
    const res = await getPayrolls();
    setPayrolls(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPayroll({ ...form, payDate });
    loadPayrolls();
  };

  return (
    <div className="container mt-4">
      <h2>Payroll</h2>
      <form onSubmit={handleSubmit} className="card p-3 mb-4">
        <input
          type="text"
          placeholder="Employee ID"
          className="form-control mb-2"
          value={form.employeeId}
          onChange={(e) => setForm({ ...form, employeeId: e.target.value })}
        />
        <input
          type="number"
          placeholder="Amount"
          className="form-control mb-2"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
        />
        <DateInput label="Pay Date" selectedDate={payDate} setSelectedDate={setPayDate} />
        <button className="btn btn-success">Add Payroll</button>
      </form>

      <ul className="list-group">
        {payrolls.map((pr) => (
          <li className="list-group-item" key={pr.id}>
            Employee {pr.employeeId} - ₹{pr.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PayrollPage;

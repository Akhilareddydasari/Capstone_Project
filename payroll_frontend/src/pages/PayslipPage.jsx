import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const PayslipPage = () => {
  const payslipRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => payslipRef.current,
  });

  return (
    <div className="container mt-4">
      <div ref={payslipRef} className="card p-4 shadow-lg">
        <h3>Payslip</h3>
        <p><strong>Employee:</strong> Akhila</p>
        <p><strong>Month:</strong> july 2025</p>
        <p><strong>Net Salary:</strong> ₹80,000</p>
      </div>
      <button className="btn btn-primary mt-3" onClick={handlePrint}>
        🖨️ Print Payslip
      </button>
    </div>
  );
};

export default PayslipPage;

import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateInput({ label, selectedDate, setSelectedDate }) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        className="form-control"
        dateFormat="dd/MM/yyyy"
        showYearDropdown
        scrollableYearDropdown
               dropdownMode="select"
      />
    </div>
  );
}

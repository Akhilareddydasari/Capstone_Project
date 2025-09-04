import React from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

export default function TooltipInput({ id, label, type, placeholder, tooltip, value, onChange }) {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">{label}</label>
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        data-tooltip-id={id}
        data-tooltip-content={tooltip}
      />
      <Tooltip id={id} place="right" effect="solid" />
    </div>
  );
}

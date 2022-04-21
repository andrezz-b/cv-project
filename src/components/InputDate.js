import React from "react";
import "../styles/inputDate.scss";

function InputDate(props) {
  const {
    value, change, edit, name,
  } = props;
  return (
    edit ? (
      <input
        type="month"
        className="date-input"
        name={name}
        value={value}
        onChange={change}
      />
    ) : <div className="display-date">{value === "" ? "/" : value}</div>

  );
}

export default InputDate;

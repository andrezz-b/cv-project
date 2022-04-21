import React from "react";
import "../styles/inputField.scss";

function InputField(props) {
  const {
    title, edit, value, change, dataID, bold,
  } = props;
  const className = `display--text ${bold && "bold"}`;
  return (
    <div className="input-container">
      {title && <h2 className="subtitle">{title}</h2>}
      {edit ? (
        <input
          className="input--text"
          type="text"
          name={dataID}
          value={value}
          onChange={change}
          autoComplete="off"
        />
      ) : (
        <div className={className}>{value === "" ? "/" : value}</div>
      )}
    </div>
  );
}

export default InputField;

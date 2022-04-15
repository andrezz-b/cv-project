import React from "react";
import "../styles/inputField.scss";

function InputField(props) {
  const {
    title, edit, value, change, dataID,
  } = props;

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
        <div className="display--text">{value === "" ? "/" : value}</div>
      )}
    </div>
  );
}

export default InputField;

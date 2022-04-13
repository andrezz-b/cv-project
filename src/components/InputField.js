import React from "react";

function InputField(props) {
  const {
    title, edit, value, change, dataID,
  } = props;

  return (
    <div>
      <h1 className="subtitle">{title}</h1>
      {edit ? (
        <input type="text" name={dataID} value={value} onChange={change} autoComplete="off" />
      ) : (
        <div>{value === "" ? "/" : value}</div>
      )}
    </div>
  );
}

export default InputField;

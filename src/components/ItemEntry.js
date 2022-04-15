/* eslint-disable react/jsx-no-bind */
import React from "react";
import InputField from "./InputField";

function ItemEntry(props) {
  const {
    edit, value, change, length, remove,
  } = props;

  function changeHandler(e) {
    const { value: inputValue, name } = e.target;
    const newData = Object.fromEntries(
      Object.entries(value).map((entry) => {
        // eslint-disable-next-line no-param-reassign
        entry[1] = entry[0] === name ? inputValue : entry[1];
        return entry;
      }),
    );
    change(newData);
  }

  return (
    <div>
      <div>
        {length > 1 && edit && <button type="button" onClick={() => remove(value.id)}>Remove</button>}
        <input type="date" name="startDate" value={value.startDate} onChange={changeHandler} />
        <input type="date" name="finishDate" value={value.finishDate} onChange={changeHandler} />
      </div>
      <InputField edit={edit} value={value.entryName} change={changeHandler} dataID="entryName" />
      <InputField edit={edit} value={value.entryDesc} change={changeHandler} dataID="entryDesc" />
    </div>
  );
}

export default ItemEntry;

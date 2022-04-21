/* eslint-disable react/jsx-no-bind */
import React from "react";
import "../styles/itemEntry.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import InputField from "./InputField";
import InputDate from "./InputDate";

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
    <div className="itemEntry-container">
      <div className="date-container">
        {length > 1 && edit && (
          <button type="button" className="removeBtn" onClick={() => remove(value.id)}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        )}
        <InputDate edit={edit} name="startDate" value={value.startDate} change={changeHandler} />
        {!edit && "-"}
        <InputDate
          edit={edit}
          name="finishDate"
          value={value.finishDate}
          change={changeHandler}
        />
      </div>
      <div className="input-container">
        <InputField edit={edit} value={value.entryName} change={changeHandler} dataID="entryName" bold="true" />
        <InputField edit={edit} value={value.entryDesc} change={changeHandler} dataID="entryDesc" />
      </div>
    </div>
  );
}

export default ItemEntry;

import React, { useState } from "react";
import uniqid from "uniqid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "./SectionTitle";
import ItemEntry from "./ItemEntry";
import SaveCancelBtn from "./SaveCancelBtn";
import "../styles/itemList.scss";

function ItemList(props) {
  const defaultEntry = {
    id: uniqid(),
    startDate: "",
    finishDate: "",
    entryName: "",
    entryDesc: "",
  };

  const [entries, setEntries] = useState([defaultEntry]);
  const [defaultEntries, setDefaultEntries] = useState([defaultEntry]);
  const addEntry = () => {
    setEntries(
      entries.concat([
        {
          id: uniqid(),
          startDate: "",
          finishDate: "",
          entryName: "",
          entryDesc: "",
        },
      ]),
    );
  };

  const removeEntry = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  const [edit, setEdit] = useState(true);
  const changeEdit = () => {
    setEdit(!edit);
    setDefaultEntries(entries);
  };

  const cancelEdit = () => {
    setEntries(defaultEntries);
    changeEdit();
  };

  const changeHandler = (newValue) => {
    const newEntry = entries.map((val) => (val.id === newValue.id ? newValue : val));
    setEntries(newEntry);
  };

  const { title } = props;

  return (
    <div className="itemList-container">
      <SectionTitle title={title} onEdit={changeEdit} edit={edit} />
      <div className="list">
        {entries.map((entry) => (
          <ItemEntry
            key={entry.id}
            edit={edit}
            change={changeHandler}
            value={entry}
            remove={removeEntry}
            length={entries.length}
          />
        ))}
        {edit && (
          <button type="button" className="addButton" onClick={addEntry}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        )}

        <SaveCancelBtn onEdit={changeEdit} edit={edit} onCancel={cancelEdit} />
      </div>
    </div>
  );
}

export default ItemList;

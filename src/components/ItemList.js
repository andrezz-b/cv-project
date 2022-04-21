import React, { Component } from "react";
import uniqid from "uniqid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "./SectionTitle";
import ItemEntry from "./ItemEntry";
import SaveCancelBtn from "./SaveCancelBtn";
import "../styles/itemList.scss";

class ItemList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // eslint-disable-next-line react/no-unused-state
      entries: [
        {
          id: uniqid(),
          startDate: "",
          finishDate: "",
          entryName: "",
          entryDesc: "",
        },
      ],
      edit: true,
    };

    this.changeEdit = this.changeEdit.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.addEntry = this.addEntry.bind(this);
    this.removeEntry = this.removeEntry.bind(this);
  }

  changeEdit() {
    const { edit } = this.state;
    this.setState({
      edit: !edit,
    });
  }

  changeHandler(newValue) {
    const { entries } = this.state;
    const newEntry = entries.map((val) => (val.id === newValue.id ? newValue : val));
    this.setState({
      entries: newEntry,
    });
  }

  addEntry() {
    const { entries } = this.state;
    this.setState({
      entries: entries.concat([
        {
          id: uniqid(),
          startDate: "",
          finishDate: "",
          entryName: "",
          entryDesc: "",
        },
      ]),
    });
  }

  removeEntry(id) {
    const { entries } = this.state;
    this.setState({
      entries: entries.filter((entry) => entry.id !== id),
    });
  }

  render() {
    const { edit, entries } = this.state;
    const { title } = this.props;
    return (
      <div className="itemList-container">
        <SectionTitle title={title} onEdit={this.changeEdit} edit={edit} />
        <div className="list">
          {entries.map((entry) => (
            <ItemEntry
              key={entry.id}
              edit={edit}
              change={this.changeHandler}
              value={entry}
              remove={this.removeEntry}
              length={entries.length}
            />
          ))}
          {edit && (
          <button type="button" className="addButton" onClick={this.addEntry}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          )}

          <SaveCancelBtn onEdit={this.changeEdit} edit={edit} />
        </div>
      </div>
    );
  }
}

export default ItemList;

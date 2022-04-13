import React, { Component } from "react";
import InputField from "./InputField";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        name: "",
        email: "",
        phone: "",
      },
      defaultData: {
        name: "",
        email: "",
        phone: "",
      },
      edit: true,
    };
    this.changeEdit = this.changeEdit.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  cancelEdit() {
    const { defaultData } = this.state;
    this.setState({
      data: defaultData,
    });
    this.changeEdit();
  }

  changeEdit() {
    const { edit, data } = this.state;
    this.setState({
      edit: !edit,
      defaultData: data,
    });
  }

  changeHandler(e) {
    const { name, value } = e.target;
    const { data } = this.state;
    const newData = Object.fromEntries(Object.entries(data).map((entry) => {
      // eslint-disable-next-line no-param-reassign
      entry[1] = entry[0] === name ? value : entry[1];
      return entry;
    }));
    this.setState({
      data: newData,
    });
  }

  render() {
    const { edit, data } = this.state;
    const { name, email, phone } = data;
    return (
      <div>
        <h1 className="title">General Info</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <InputField
            title="Name:"
            edit={edit}
            value={name}
            change={this.changeHandler}
            dataID="name"
          />
          <InputField
            title="E-mail:"
            edit={edit}
            value={email}
            change={this.changeHandler}
            dataID="email"
          />
          <InputField
            title="Phone-number:"
            edit={edit}
            value={phone}
            change={this.changeHandler}
            dataID="phone"
          />

          {edit ? (
            <div>
              <button type="submit" onClick={this.changeEdit}>Save</button>
              <button type="button" onClick={this.cancelEdit}>Cancel</button>
            </div>
          ) : <button type="button" onClick={this.changeEdit}>Edit</button>}
        </form>
      </div>
    );
  }
}

export default GeneralInfo;

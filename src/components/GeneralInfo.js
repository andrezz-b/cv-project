import React, { useState } from "react";
import InputField from "./InputField";
import SaveCancelBtn from "./SaveCancelBtn";
import SectionTitle from "./SectionTitle";
import "../styles/generalInfo.scss";

function GeneralInfo() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [defaultData, setDefaultData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [edit, setEdit] = useState(true);

  const changeEdit = () => {
    setEdit(!edit);
    setDefaultData(data);
  };
  const cancelEdit = () => {
    setData(defaultData);
    changeEdit();
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    const newData = Object.fromEntries(
      Object.entries(data).map((entry) => {
        // eslint-disable-next-line no-param-reassign
        entry[1] = entry[0] === name ? value : entry[1];
        return entry;
      }),
    );
    setData(newData);
  };

  const { name, email, phone } = data;

  return (
    <div className="generalInfo-container">
      <SectionTitle title="General Info" onEdit={changeEdit} edit={edit} />
      <form className="generalInfo-form" onSubmit={(e) => e.preventDefault()}>
        <InputField
          title="Name:"
          edit={edit}
          value={name}
          change={changeHandler}
          dataID="name"
        />
        <InputField
          title="E-mail:"
          edit={edit}
          value={email}
          change={changeHandler}
          dataID="email"
        />
        <InputField
          title="Phone-number:"
          edit={edit}
          value={phone}
          change={changeHandler}
          dataID="phone"
        />

        <SaveCancelBtn edit={edit} onEdit={changeEdit} onCancel={cancelEdit} />
      </form>
    </div>
  );
}

export default GeneralInfo;

import React from "react";
import EditBtn from "./EditBtn";
import "../styles/sectionTitle.scss";

function SectionTitle(props) {
  const { edit, onEdit, title } = props;
  return (
    <div className="title-container">
      <h1 className="title">{title}</h1>
      <EditBtn edit={edit} onEdit={onEdit} />
    </div>
  );
}

export default SectionTitle;

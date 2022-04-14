import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

function EditBtn(props) {
  const { edit, onEdit } = props;
  return !edit
    && (
    <button className="button edit" type="button" onClick={onEdit}>
      <FontAwesomeIcon icon={faPen} />
    </button>
    );
}

export default EditBtn;

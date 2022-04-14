import React from "react";
import "../styles/buttons.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

function SaveCancelBtn(props) {
  const { edit, onEdit, onCancel } = props;
  return (
    <div className="button-container">
      {edit && (
        <>
          <button className="button save" type="submit" onClick={onEdit}>
            <FontAwesomeIcon icon={faCheck} />
          </button>
          <button className="button cancel" type="button" onClick={onCancel}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </>
      )}
    </div>
  );
}

export default SaveCancelBtn;

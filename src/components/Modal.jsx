import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

function Modal({ isOpen, onClose, children }) {
  //If modal not open, return null
  if (!isOpen) return null;

  //Create a portal to render the modal
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">{children}</div>
    </div>,
    document.getElementById("portal")
  );
}

export default Modal;

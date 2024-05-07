import React from "react";
import { Modal} from "react-bootstrap";
const ErrorModal = ({ show, onClose, message }) => {
  return (
    <Modal show={show} onClick={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <p>{message}</p>
      </Modal.Body>
    </Modal>
   
  );
};

export default ErrorModal;

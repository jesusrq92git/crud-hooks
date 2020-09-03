import React from "react";
import { Modal, Button } from "react-bootstrap";

const ModalComponent = props => {
  return (
    <Modal show={props.showModal}>
      <Modal.Header closeButton onClick={() => props.setShowModal(false)}>
        <Modal.Title>Editar</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          type="text"
          value={props.toReplaceEdit}
          onChange={e => props.setToReplaceEdit(e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => props.setShowModal(false)}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={() => props.changeValueEdit()}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;

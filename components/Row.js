import React from "react";
import { Row, Col } from "react-bootstrap";

const RowComp = props => {
  return (
    <React.Fragment>
      <li>
        <Row>
          <Col>{props.name}</Col>
          <Col>
            <button
              onClick={() => {
                props.handleEdit(props.name);
              }}
            >
              Editar
            </button>
            <button
              onClick={() => {
                props.handleDelete(props.name);
              }}
            >
              x
            </button>
          </Col>
        </Row>
      </li>
    </React.Fragment>
  );
};

export default RowComp;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import ModalComponent from "./components/Modal";
import RowComp from "./components/Row";
import InputTest from "./components/Input";
import { connect } from "react-redux";
import { loadingAction } from "./action/loading.action";

const App = props => {
  //this.state
  const [employees, setEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [toEdit, setToEdit] = useState("");
  const [toReplaceEdit, setToReplaceEdit] = useState("");

  //componentDidMount()
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=15")
      .then(function(res) {
        setEmployees(res.data.results);
      })
      .catch(function(err) {
        console.log(err);
      });
  }, []);

  const handleAdd = (value, inputEl) => {
    if (value === "") {
      alert("Escribe un valor...");
    } else {
      props.loadingAction(true);
      let newList = [
        ...employees,
        {
          name: value,
          url: ""
        }
      ];
      setEmployees(newList);
      inputEl.current.value = "";
      setTimeout(() => props.loadingAction(false), 400);
    }
  };

  const handleDelete = nameDeleted => {
    props.loadingAction(true);
    const index = employees.findIndex((item, index) => {
      return item.name === nameDeleted;
    });

    employees.splice(index, 1);
    let newList = [...employees];
    setEmployees(newList);
    setTimeout(() => props.loadingAction(false), 400);
  };

  const handleEdit = nameEdit => {
    setToEdit(nameEdit);
    setToReplaceEdit(nameEdit);
    setShowModal(true);
  };

  const changeValueEdit = () => {
    props.loadingAction(true);
    const employeesEdited = employees.map(item => {
      if (item.name === toEdit) {
        return {
          ...item,
          name: toReplaceEdit
        };
      }
      return { ...item };
    });
    let newList = [...employeesEdited];
    setEmployees(newList);
    setTimeout(() => props.loadingAction(false), 400);
    setShowModal(false);
  };

  return (
    <Container>
      <ModalComponent
        showModal={showModal}
        toReplaceEdit={toReplaceEdit}
        setShowModal={setShowModal}
        setToReplaceEdit={setToReplaceEdit}
        changeValueEdit={changeValueEdit}
      />
      { 
        !props.loadingReducer.showLoading ? (
          <React.Fragment>
            <Row className={"mt-5"}>
              <Col xs={12}>
                <InputTest handleAdd={handleAdd} />
              </Col>
            </Row>
            <Row className={"mt-5"}>
              <Col xs={12}>
                <ul>
                  {employees.map((item, index) => (
                    <RowComp
                      key={index}
                      {...item}
                      handleEdit={handleEdit}
                      handleDelete={handleDelete}
                    />
                  ))}
                </ul>
              </Col>
            </Row>
          </React.Fragment>
        ) : (
          <Row className={"mt-5"}>
            <Col xs={12}>
              <p>Cargando...</p>
            </Col>
          </Row>
        )
      }
    </Container>
  );
};

const mapStateToProps = state => ({
  loadingReducer: state.loadingReducer
});

const mapDispatchToProps = () => {
  return {
    loadingAction
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(App);
// React
import React from "react";
import PropTypes from "prop-types";

// Bootstrap
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import { Tooltip } from "react-bootstrap";
import { OverlayTrigger } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheckSquare as farCheckSquare } from "@fortawesome/free-regular-svg-icons";
import { faSquare as farSquare } from "@fortawesome/free-regular-svg-icons";
import "./CreatedCard.css";

import { deleteTodoAsync } from "../../redux/todoSlice";
import { useDispatch } from "react-redux";
import MyModal from "../Modal/MyModal";

const CreatedCard = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  const handleDeleteTodo = () => {
    dispatch(deleteTodoAsync({ id: id }));
  };

  const capitalize = (str) => {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
  };

  const [isEditing, setIsEditing] = React.useState(false);

  function handleEditTodo() {
    setIsEditing(true);
  }

  return (
    <Card className="created mb-3">
      <Container className="p-0">
        <Card.Body>
          <Row className="rowClass">
            <Col xs={6}>
              <Card.Title className="taskName">{capitalize(title)}</Card.Title>
            </Col>
            <Col xs={2}>
              <i className="btn buttonStyle">
                {completed ? (
                  <FontAwesomeIcon icon={farCheckSquare}></FontAwesomeIcon>
                ) : (
                  <FontAwesomeIcon icon={farSquare}></FontAwesomeIcon>
                )}
              </i>
            </Col>
            <Col xs={2}>
              <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-bottom">Edit task</Tooltip>}>
                <Button className="buttonStyle" onClick={handleEditTodo}>
                  <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                </Button>
              </OverlayTrigger>
            </Col>
            <Col xs={2}>
              <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-bottom">Delete task</Tooltip>}>
                <Button className="buttonStyle" onClick={handleDeleteTodo}>
                  <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </Button>
              </OverlayTrigger>
            </Col>
          </Row>
        </Card.Body>
        <MyModal
          show={isEditing}
          isEditing={true}
          currentTodo={{ id, title, completed }}
          handleClose={() => setIsEditing(false)}
        />
      </Container>
    </Card>
  );
};

CreatedCard.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  handleShow: PropTypes.func,
};

export default CreatedCard;

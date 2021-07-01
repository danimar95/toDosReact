import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addTodoAsync, editTodoAsync } from "../../redux/todoSlice";
import "./MyModal.css";

const MyModal = (props) => {
  const dispatch = useDispatch();
  const [taskTitle, settaskTitle] = React.useState("");
  const [checked, setChecked] = React.useState(false);

  const onSubmit = () => {
    if (props.isEditing) {
      if (taskTitle.length > 0) {
        dispatch(editTodoAsync({ title: taskTitle, completed: checked, id: props.currentTodo.id }));
        props.handleClose();
      } else {
        props.handleClose();
      }
    } else {
      if (taskTitle.length > 0) {
        dispatch(addTodoAsync({ title: taskTitle, completed: checked, id: Date.now() }));
        props.handleClose();
      } else {
        props.handleClose();
      }
    }
  };

  React.useEffect(() => {
    if (props.show) {
      if (props.isEditing) {
        settaskTitle(props.currentTodo.title);
        setChecked(props.currentTodo.completed);
      } else {
        settaskTitle("");
        setChecked(false);
      }
    }
  }, [props.show]);

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header>
        <Modal.Title>Task</Modal.Title>
        <Button className="closeButton float-right" onClick={props.handleClose}>
          &times;
        </Button>
      </Modal.Header>

      <Modal.Body>
        <Container>
          <label htmlFor="inputTask">
            <strong>Task Title</strong>
          </label>
          <Row>
            <Col xs={10} md={10} className="pl-7">
              <input
                value={taskTitle}
                onChange={(event) => {
                  settaskTitle(event.currentTarget.value);
                }}
                required
                type="text"
                className="form-control mt-2"
                id="inputTask"
                placeholder={"E.g.: My first task"}
              />
            </Col>
            <Col xs={2} md={2}>
              <input
                type="checkbox"
                id="inputCompleted"
                className="checkbox"
                defaultChecked={checked}
                onClick={() => setChecked(!checked)}
              ></input>
              <span className="checkmark"></span>
            </Col>
          </Row>
        </Container>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button className="saveButton" onClick={onSubmit}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

MyModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool,
  currentTodo: PropTypes.object,
};

MyModal.defaultProps = {
  isEditing: false,
  currentTodo: null,
};

export default MyModal;

import React from "react";
import { useState } from "react";
// import PropTypes from "prop-types";

// Styles
import "./DefaultCard.css";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Tooltip } from "react-bootstrap";
import { OverlayTrigger } from "react-bootstrap";

// Components
import ListOfCards from "../ListOfCards/ListOfCards.jsx";
import CustomAlert from "../CustomAlert.jsx";
import MyModal from "../Modal/MyModal.jsx";

const DefaultCard = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const renderAddTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Add new task
    </Tooltip>
  );
  return (
    <React.Fragment>
      <Container className="card static">
        <Row>
          <Col xs={8}>
            <h4>Simple Task Manager</h4>
          </Col>
          <Col xs={4}>
            <OverlayTrigger placement="bottom" delay={{ show: 50, hide: 100 }} overlay={renderAddTooltip}>
              <Button
                type="button"
                className="btn plusButton shadow-none"
                id="openModalButton"
                data-toggle="modal"
                style={{ position: "absolute", right: 20, top: 18 }}
                onClick={handleShow}
              >
                +
              </Button>
            </OverlayTrigger>
          </Col>
        </Row>
        <CustomAlert text={"Click on the plus button to create a new task!"} />
        <ListOfCards />
      </Container>
      <MyModal show={show} handleClose={handleClose} />
    </React.Fragment>
  );
};

export default DefaultCard;

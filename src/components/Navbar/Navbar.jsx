import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faTasks } from "@fortawesome/free-solid-svg-icons";

const NavigationBar = () => (
  <Navbar className="navigationBar navbar-dark navbar navbar-expand-sm pl-5" expand="lg">
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Brand href="#home">&nbsp;Tasks </Navbar.Brand>
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link className="nav-link options" eventKey="1" href="#">
          <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon>
          &nbsp;Information
        </Nav.Link>
        <Nav.Link className="nav-link options" eventKey="2" href="#" active="active">
          <FontAwesomeIcon icon={faTasks} active="active"></FontAwesomeIcon>
          &nbsp;Task Manager
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavigationBar;

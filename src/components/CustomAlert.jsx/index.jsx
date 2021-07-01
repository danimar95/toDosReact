import React from "react";
import PropType from "prop-types";
import "./CustomAlert.css";

// Bootstrap
import Alert from "react-bootstrap/Alert";

const CustomAlert = (props) => {
  return (
    <Alert className="alertClass mb-3 mt-4" variant="danger">
      {props.text}
    </Alert>
  );
};

CustomAlert.propTypes = {
  text: PropType.string.isRequired,
};

export default CustomAlert;

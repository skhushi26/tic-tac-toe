import React from "react";
import "./square.css";

function Square(props) {
  return (
    <button
      className={`square-btn ${props.value ? "active" : ""}`}
      onClick={() => props.onClick()}
      disabled={props.clickDisable}
    >
      {props.value}
    </button>
  );
}

export default Square;

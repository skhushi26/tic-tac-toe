import React from "react";
import "./square.css";

function Square(props) {
  return (
    <button
      className="square-btn"
      onClick={() => props.onClick()}
      disabled={props.clickDisable}
    >
      {props.value}
    </button>
  );
}

export default Square;

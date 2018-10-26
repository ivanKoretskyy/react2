import React from "react";
import "./Char.css";

const char = props => {
  return (
    <div className="char-box" onClick={props.remove}>
      {props.symbol}
    </div>
  );
};

export default char;

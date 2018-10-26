import React from "react";
import "./UserInput.css";

const userInput = props => {
  return <input type="text" onChange={props.onChange} value={props.userName} />;
};

export default userInput;

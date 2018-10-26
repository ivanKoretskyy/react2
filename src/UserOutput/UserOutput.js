import React from "react";

const userOutput = props => {
  const style = {
    border: "1px solid black",
    backgroundColor: "grey",
    padding: "10px",
    margin: "10px",
    fontWeight: "bold",
    color: "white"
  };
  return <p style={style}>{props.userName}</p>;
};

export default userOutput;

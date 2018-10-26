import React from "react";

const validation = props => {
  return (
    <div>
      {props.userName.length < 8 ? (
        <p style={{ color: "red" }} className="validation-fail">
          Name is too short
        </p>
      ) : (
        <p style={{ color: "green" }} className="validation-success">
          Strong
        </p>
      )}
    </div>
  );
};

export default validation;

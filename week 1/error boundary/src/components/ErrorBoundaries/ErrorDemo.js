import React from "react";

function ErrorDemo(props) {
  if (props.name != "Error Boundary") {
    throw new Error("There is an Error!");
  }

  return <div className="name">{props.name}</div>;
}

export default ErrorDemo;

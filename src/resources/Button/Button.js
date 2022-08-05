import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  const classe = `${props.className} ${classes.button}`;
  return (
    <button onClick={props.onClick} className={classe}>
      {props.children}
    </button>
  );
};

export default Button;

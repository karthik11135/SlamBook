import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
    const cssClass = `${classes.card} ${props.className}`
  return <div className={cssClass}>{props.children}</div>;
};

export default Card;

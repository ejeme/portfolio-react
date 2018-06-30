import React from "react";
import "./ClickItem.css";

const ClickItem = props => (
  <div
    role="img"
    aria-label="click item"
    onClick={() => props.handleClick(props.url)}
    style={{ backgroundImage: `url("${props.image}")` }}
    className={`click-item${props.shake ? " shake" : ""}`}

  />
);

export default ClickItem;

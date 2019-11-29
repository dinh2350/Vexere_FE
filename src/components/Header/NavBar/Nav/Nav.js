import React from "react";
import "./Nav.scss";

export default function(props) {
  return (
    <>
      <li className="header__nav">
        <span>{props.name}</span>
        {props.img}
      </li>
    </>
  );
}

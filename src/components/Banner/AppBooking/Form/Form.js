import React from "react";
import "./Form.scss";
import FromStation from "./FromStation/FromStation";
import ToStation from "./ToStation/ToStation";
import Date from "./Date/Date";
import BtnReverse from "./BtnReverse/BtnReverse";
import BtnFind from "./BtnFind/BtnFind";

export default function() {
  return (
    <div className="banner__form">
      <FromStation />
      <BtnReverse />
      <ToStation />
      <Date />
      <BtnFind />
    </div>
  );
}

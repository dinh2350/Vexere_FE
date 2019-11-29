import React from "react";
import Nav from "./Nav/Nav";
import HotLine from "./HotLine/HotLine";
import "./NavBar.scss";

export default function() {
  return (
    <div className="header__navbar">
      <ul>
        <Nav name="Vé Xe Tết" />
        <Nav name="Xe Limousine" />
        <Nav name="Phần Mềm Nhà Xe" />
        <Nav name="Quản Lý Xe" />
        <Nav name="EN" img={<img src="./img/english_icon.png" alt="EN" />} />
        <HotLine />
      </ul>
    </div>
  );
}

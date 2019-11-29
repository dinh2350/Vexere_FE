import React from "react";
import Logo from "./Logo/Logo";
import NavBar from "./NavBar/NavBar";
import "./Header.scss";

export default function() {
  return (
    <header className="header">
      <div className="header__content">
        <Logo />
        <NavBar />
      </div>
    </header>
  );
}

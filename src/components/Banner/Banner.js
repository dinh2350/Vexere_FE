import React from "react";
import AppBooking from "./AppBooking/AppBooking";
import "./Banner.scss";

export default function() {
  return (
    <section className="banner">
      <div className="banner__content">
        <img src="./img/background-banner.png" alt="banner" />
        <AppBooking />
      </div>
    </section>
  );
}

import React from "react";

import "./ToStation.scss";

export default function() {
  return (
    <div className="banner__toStaton">
      <div className="banner__icon">
        <i className="fa fa-map-marker-alt"></i>
      </div>
      <div className="banner__input">
        <input type="text" placeholder="nơi đến" />
      </div>
    </div>
  );
}

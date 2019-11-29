import React from "react";

import "./FromStation.scss";

export default function() {
  return (
    <div className="banner__fromStaton">
      <div className="banner__icon">
        <i className="fa fa-map-marker-alt"></i>
      </div>
      <div className="banner__input">
        <input type="text" placeholder="nơi đi" />
      </div>
    </div>
  );
}

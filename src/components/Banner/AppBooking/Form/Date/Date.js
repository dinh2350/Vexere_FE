import React from "react";

import "./Date.scss";

export default function() {
  return (
    <div className="banner__date">
      <div className="banner__icon">
        <i class="fa fa-calendar-alt"></i>
      </div>
      <div className="banner__input">
        <input type="text" placeholder="chọn ngày" />
      </div>
    </div>
  );
}

import React from "react";

import "./Toast.css";

const Toast = (props) => (
  <button className={`toast ${props.toast.bgColor}`}>
    {props.toast.message}
  </button>
);

export default Toast;

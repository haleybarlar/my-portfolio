import React from "react";
import { Link } from "react-router-dom";
import "../css/homemadeburger.scss";

export default function HomemadeBurger(props) {
  return <div className="homemade-burger">{props.navLinks}</div>;
}

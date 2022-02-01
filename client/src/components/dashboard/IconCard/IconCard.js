import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./IconCard.css";

const IconCard = (props) => {
  return (
    <div className="iconCardContainer">
      <FontAwesomeIcon icon={props.icon} />
      <p>{props.label}</p>
    </div>
  );
};

export default IconCard;

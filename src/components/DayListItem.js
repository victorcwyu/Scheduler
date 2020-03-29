import React from "react";

import "components/DayListItem.scss";

const classNames = require("classnames");

export default function DayListItem(props) {
  let dayClass = classNames({
    "day-list__item": true,
    "day-list__item--selected": (props.selected),
    "day-list__item--full": (props.spots === 0)
  });

  const formatSpots = function(props) {
    if (props === 0) {
      return "no spots remaining"
    } else if (props === 1) {
      return props += " spot remaining"
    } else
      return props + " spots remaining"
  };
  
  return (
    <li 
      data-testid="day" 
      className={dayClass} 
      onClick={() => props.setDay(props.name)}
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
};
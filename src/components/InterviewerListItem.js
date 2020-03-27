import React from "react"

import "components/InterviewerListItem.scss"

const classNames = require("classnames");

export default function InterviewerListItem(props) {
  let interviewerClass = classNames({
    "interviewers__item": true,
    "interviewers__item-image": true,
    "interviewers__item--selected": (props.selected),
  });
  return (
    <li className={interviewerClass} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={"image of the interviewer"}
      />
      {props.selected && props.name}
    </li>
  );
}
import React from "react"

import "components/InterviewerListItem.scss"

const classNames = require("classnames");

export default function InterviewerListItem(props) {
  let interviewerClass = classNames({
    "interviewers__item": true,
    "interviewers__item-image": true,
    // ^ this one necessary?
    "interviewers__item--selected": (props.selected),
  });

  // my original answer
  // return (
  //   <li className={interviewerClass} onClick={props.setInterviewer}>
  //     <img
  //       className={interviewerClass}
  //     src={props.avatar}
  //     alt={props.name}
  //     />
  //       {props.name}
  //   </li>
  // );

  return (
    <li className={interviewerClass} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
      {/* condiional rendering, if selected then name appears ^ */}
    </li>
  );



}
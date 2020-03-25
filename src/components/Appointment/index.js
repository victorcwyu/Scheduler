import React from "react";

import "./styles.scss";

import Header from "./Header"

import Show from "./Show"

import Empty from "./Empty"

import Form from "./Form"

import Status from "./Status"

import Confirm from "./Confirm"

import Error from "./Error"

import useVisualMode from "hooks/useVisualMode";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    transition(SAVING)
    const interview = {
      student: name,
      interviewer
    };
    props.bookInterview(props.id, interview).then(() => transition(SHOW)).catch(() => transition(ERROR_SAVE, true));
  }
  function deleting() {
    transition(DELETING, true)
    props.cancelInterview(props.id).then(() => transition(EMPTY)).catch(() => transition(ERROR_DELETE, true));
  }
  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(CONFIRM)}
          onEdit={() => transition(EDIT)}
        />
      )}
      {mode === EDIT && <Form interviewers={props.interviewers} name={props.interview.student} interviewer={props.interview.interviewer.id} onCancel={() => back()} onSave={save} />}
      {mode === CREATE && <Form interviewers={props.interviewers} onCancel={() => back()} onSave={save} />}
      {mode === SAVING && <Status message={"Saving"}/>}
      {mode === CONFIRM && <Confirm onCancel={() => back()} onConfirm={deleting} />}
      {mode === DELETING && <Status message={"Deleting"} />}
      {mode === ERROR_SAVE && <Error message={"Could not save appointment."} onClose={() => back()} />}
      {mode === ERROR_DELETE && <Error message={"Could not cancel appointment."} onClose={() => back()} />}
    </article>
  );
}
import React, { useState } from 'react';

import Button from "components/Button"

import InterviewerList from "components/InterviewerList"

export default function Form(props) {

  const [name, setName] = useState(props.name || "");

  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  const reset = function() {
    setName("");
    setInterviewer(null);
  };

  const cancel = function() {
    setInterviewer(null)
    setName("")
    props.onCancel()
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form onSubmit={event => event.preventDefault()} autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            value={name}
            type="text"
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter Student Name"
          />
        </form>
        <InterviewerList interviewers={props.interviewers} value={interviewer} onChange={setInterviewer} />

      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={() => props.onSave(name, interviewer)}>Save</Button>
        </section>
      </section>
    </main>
  );
};
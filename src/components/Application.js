import React from "react";
import DayList from "components/DayList";
import Appointment from 'components/Appointment'
import "components/Application.scss";
import "components/Appointment"
import useApplicationData from "../hooks/useApplicationData"
import { getAppointmentsForDay, getInterviewersForDay, getInterview} from "../helpers/selectors.js"

export default function Application(props) {
  const {
    state,
    setDay,
    bookInterview,
    cancelInterview
  } = useApplicationData();
  const interviewers = getInterviewersForDay(state, state.day)
  const appointments = getAppointmentsForDay(state, state.day)
  function renderAppointments() {
    const addAppointments = appointments.map(appointment => {
      const interview = getInterview(state, appointment.interview);
      return (
        <Appointment
          key={appointment.id}
          id={appointment.id}
          time={appointment.time}
          interview={interview}
          interviewers={interviewers}
          bookInterview={bookInterview}
          cancelInterview={cancelInterview}
         />
      );
    });
    return (
      <ul>
        {addAppointments}
        <Appointment key="last" time="5pm" />
      </ul>
    );
  }
  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList 
            days={state.days} 
            day={state.day} 
            setDay={setDay} 
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {renderAppointments()}
      </section>
    </main>
  );
}

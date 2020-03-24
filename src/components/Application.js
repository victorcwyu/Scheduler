import React, { useState, useEffect } from "react";
import axios from 'axios';
import DayList from "components/DayList";
import Appointment from 'components/Appointment'
import "components/Application.scss";
import "components/Appointment"
import { getAppointmentsForDay, getInterviewersForDay, getInterview} from "../helpers/selectors.js"

export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  })
  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return axios.put(`/api/appointments/${id}`, appointment).then(setState(state => ({...state, appointments})));
  }
  function cancelInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return axios.delete(`/api/appointments/${id}`, appointment).then(setState(state => ({ ...state, appointments })));
  }
  const appointments = getAppointmentsForDay(state, state.day)
  const interviewers = getInterviewersForDay(state, state.day)
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
  const setDay = day => setState({ ...state, day });
  useEffect(() => {
    Promise.all([
    Promise.resolve(axios.get("api/days")),
    Promise.resolve(axios.get("api/appointments")),
    Promise.resolve(axios.get("api/interviewers")),
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
    });
  }, []);
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

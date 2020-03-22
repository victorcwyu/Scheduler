const getAppointmentsForDay = function(state, day) { 
  const filteredDays = state.days.filter(dayOfDays => dayOfDays.name === day);
  if (!day || filteredDays === [] || filteredDays[0] === undefined) {
    return [];
  };
  const {appointments} = filteredDays[0];
  const appointmentsArr = Object.values(state.appointments);
  let result = [];
    for (let item of appointmentsArr) {
      if (appointments.includes(item.id)) {
        result.push(item)
      };
    };
    return result;
};

const getInterview = function(state, interview) {
  if (!interview || !interview.interviewer) {
    return null
  } else {
      return { ...interview, interviewer: state.interviewers[interview.interviewer] }
  }
};
export {getAppointmentsForDay, getInterview};
import {getAppointmentsForDay, getInterviewersForDay, getInterview} from "helpers/selectors";

const state = {
  days: [
    {
      id: 1,
      name: "Monday",
      appointments: [1, 2, 3],
      interviewers: ["Tori Malcolm", "Mildred Nazir"]
    },
    {
      id: 2,
      name: "Tuesday",
      appointments: [4, 5],
      interviewers: ["Cohana Roy", "Sven Jones"]
    }
  ],
  appointments: {
    "1": { 
      id: 1,
      time: "1pm",
      interview: { student: "Archie Cohen", interviewer: 2 }
    },
    "2": {
      id: 2,
      time: "2pm",
      interview: null
    },
    "3": {
      id: 3,
      time: "3pm",
      interview: { student: "Charlie Cohen", interviewer: 3 }
    },
    "4": {
      id: 4,
      time: "4pm",
      interview: { student: "Bad Takahashi", interviewer: 4 }
    },
    "5": {
      id: 5,
      time: "5pm",
      interview: { student: "Chad Takahashi", interviewer: 5 }
    }
  },
  interviewers: {
    "1": {
      "id": 1,
      "name": "Sylvia Palmer",
      "avatar": "https://i.imgur.com/LpaY82x.png"
    },
    "2": {
      id: 2,
      name: "Tori Malcolm",
      avatar: "https://i.imgur.com/Nmx0Qxo.png"
    },
    "3": { 
      id: 3, 
      name: "Mildred Nazir", 
      avatar: "https://i.imgur.com/T2WwVfS.png"
     },
    "4": { 
      id: 4, 
      name: "Cohana Roy", 
      avatar: "https://i.imgur.com/FK8V841.jpg" 
    },
    "5": {
      id: 5, 
      name: "Sven Jones", 
      avatar: "https://i.imgur.com/twYrpay.jpg"
    }
  }
};

test("getAppointmentsForDay returns an array", () => {
  const result = getAppointmentsForDay(state, "Monday");
  expect(Array.isArray(result)).toBe(true);
});

test("getAppointmentsForDay returns an array with a length matching the number of appointments for that day", () => {
  const result = getAppointmentsForDay(state, "Monday");
  expect(result.length).toEqual(3);
});

test("getAppointmentsForDay returns an array containing the correct appointment objects", () => {
  const [first, second] = getAppointmentsForDay(state, "Tuesday");
  expect(first).toEqual(state.appointments["4"]);
  expect(second).toEqual(state.appointments["5"]);
});

test("getAppointmentsForDay returns an empty array when the days data is empty", () => {
  const result = getAppointmentsForDay({ days: [] }, "Monday");
  expect(result.length).toEqual(0);
});

test("getAppointmentsForDay returns an empty array when the day is not found", () => {
  const result = getAppointmentsForDay(state, "Wednesday");
  expect(result.length).toEqual(0);
});

test("getInterviewersForDay returns an array", () => {
  const result = getInterviewersForDay(state, "Monday");
  expect(Array.isArray(result)).toBe(true);
});

test("getInterviewersForDay returns an array with a length matching the number of interviewers for that day", () => {
  const result = getInterviewersForDay(state, "Monday");
  expect(result.length).toEqual(2);
});

test("getInterviewersForDay returns an array containing the correct interviewer objects", () => {
  const [first] = getInterviewersForDay(state, "Tuesday");
  expect(first).toEqual(state.interviewers["2"]);
});

test("getInterviewersForDay returns an empty array when the days data is empty", () => {
  const result = getInterviewersForDay({ days: [] }, "Monday");
  expect(result.length).toEqual(0);
});

test("getInterviewersForDay returns an empty array when the day is not found", () => {
  const result = getInterviewersForDay(state, "Wednesday");
  expect(result.length).toEqual(0);
});

test("getInterview returns an object with the interviewer data", () => {
  const result = getInterview(state, state.appointments["3"].interview);
  expect(result).toEqual(
    expect.objectContaining({
      student: expect.any(String),
      interviewer: expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        avatar: expect.any(String)
      })
    })
  );
});

test("getInterview returns null if no interview is booked", () => {
  const result = getInterview(state, state.appointments["2"].interview);
  expect(result).toBeNull();
});
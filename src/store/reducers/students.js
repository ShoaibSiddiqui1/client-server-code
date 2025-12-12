import {
  FETCH_ALL_STUDENTS,
  ADD_STUDENT,
  DELETE_STUDENT,
  EDIT_STUDENT,
} from "../actions/actionTypes";

const allStudents = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_STUDENTS:
      return action.payload;
    case ADD_STUDENT:
      return [...state, action.payload];
    case DELETE_STUDENT:
      return state.filter((student) => student.id !== action.payload);
    case EDIT_STUDENT:
      return state.map((student) =>
        student.id === action.payload.id ? action.payload : student
      );
    default:
      return state;
  }
};

export default allStudents;

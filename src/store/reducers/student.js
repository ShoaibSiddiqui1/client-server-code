import { FETCH_STUDENT, EDIT_STUDENT_FULL} from "../actions/actionTypes";

const student = (state = {}, action) => {
  switch (action.type) {
    case FETCH_STUDENT:
      return action.payload;
    case EDIT_STUDENT_FULL:
        return action.payload;
    default:
      return state;
  }
};

export default student;

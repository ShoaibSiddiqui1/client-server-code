import * as at from "./actionTypes";

// All campuses
export const fetchAllCampuses = (campuses) => ({
  type: at.FETCH_ALL_CAMPUSES,
  payload: campuses,
});

export const addCampus = (campus) => ({
  type: at.ADD_CAMPUS,
  payload: campus,
});

// Single campus
export const fetchCampus = (campus) => ({
  type: at.FETCH_CAMPUS,
  payload: campus,
});

// All students
export const fetchAllStudents = (students) => ({
  type: at.FETCH_ALL_STUDENTS,
  payload: students,
});

export const addStudent = (student) => ({
  type: at.ADD_STUDENT,
  payload: student,
});

export const deleteStudent = (id) => ({
  type: at.DELETE_STUDENT,
  payload: id,
});

export const editStudent = (student) => ({
  type: at.EDIT_STUDENT,
  payload: student,
});

// Single student
export const fetchStudent = (student) => ({
  type: at.FETCH_STUDENT,
  payload: student,
});

export const deleteCampus = (campusId) => ({
  type: at.DELETE_CAMPUS,
  payload: campusId,
});

export const editCampus = (campus) => ({
  type: at.EDIT_CAMPUS,
  payload: campus,
});

export const editStudentFull = (student) => ({
  type: at.EDIT_STUDENT_FULL,
  payload: student,
});

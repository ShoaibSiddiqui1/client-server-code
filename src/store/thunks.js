import axios from "axios";
import * as ac from "./actions/actionCreators";

// All campuses
export const fetchAllCampusesThunk = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/campuses");
    dispatch(ac.fetchAllCampuses(res.data));
  } catch (err) {
    console.error(err);
  }
};

export const fetchCampusThunk = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/campuses/${id}`);
    dispatch(ac.fetchCampus(res.data));
  } catch (err) {
    console.error(err);
  }
};

export const addCampusThunk = (campus) => async (dispatch) => {
  try {
    const res = await axios.post("/api/campuses", campus);
    dispatch(ac.addCampus(res.data));
  } catch (err) {
    console.error(err);
  }
};

// All students
export const fetchAllStudentsThunk = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/students");
    dispatch(ac.fetchAllStudents(res.data));
  } catch (err) {
    console.error(err);
  }
};

export const addStudentThunk = (student) => async (dispatch) => {
  try {
    const res = await axios.post("/api/students", student);
    dispatch(ac.addStudent(res.data));
  } catch (err) {
    console.error(err);
  }
};

export const deleteStudentThunk = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/students/${id}`);
    dispatch(ac.deleteStudent(id));
  } catch (err) {
    console.error(err);
  }
};

export const editStudentThunk = (student) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/students/${student.id}`, student);
    dispatch(ac.editStudent(res.data));       // updates allStudents list
    dispatch(ac.editStudentFull(res.data));   // updates single student page
    return res.data;
  } catch (err) {
    console.error(err);
  }
};


export const fetchStudentThunk = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/students/${id}`);
    dispatch(ac.fetchStudent(res.data));
  } catch (err) {
    console.error(err);
  }
};

export const deleteCampusThunk = (campusId) => async (dispatch) => {
  try {
    await axios.delete(`/api/campuses/${campusId}`);
    dispatch(ac.deleteCampus(campusId));
  } catch (err) {
    console.error(err);
  }
};

export const editCampusThunk = (campus) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/campuses/${campus.id}`, campus);
    dispatch(ac.editCampus(res.data));
    return res.data;
  } catch (err) {
    console.error(err);
  }
};


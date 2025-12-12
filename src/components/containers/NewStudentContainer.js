import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { NewStudentView } from "../views";
import { addStudentThunk } from "../../store/thunks";

const NewStudentContainer = (props) => {
  const { addStudent } = props;

  const handleAddStudent = async (student) => {
    await addStudent(student);
    // after adding, go back to all students
    props.history.push("/students");
  };

  return (
    <div>
      <Header />
      <NewStudentView addStudent={handleAddStudent} />
    </div>
  );
};

const mapDispatch = (dispatch) => ({
  addStudent: (student) => dispatch(addStudentThunk(student)),
});

export default connect(null, mapDispatch)(NewStudentContainer);

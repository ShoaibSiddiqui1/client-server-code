import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { AllStudentsView } from "../views";
import {
  fetchAllStudentsThunk,
  deleteStudentThunk,
} from "../../store/thunks";

class AllStudentsContainer extends Component {
  componentDidMount() {
    this.props.fetchAllStudents();
  }

  render() {
    return (
      <div>
        <Header />
        <AllStudentsView
          students={this.props.allStudents}
          deleteStudent={this.props.deleteStudent}
        />
      </div>
    );
  }
}

const mapState = (state) => ({
  allStudents: state.allStudents,
});

const mapDispatch = (dispatch) => ({
  fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
  deleteStudent: (id) => dispatch(deleteStudentThunk(id)),
});

export default connect(mapState, mapDispatch)(AllStudentsContainer);

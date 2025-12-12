import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { StudentView } from "../views";
import { fetchStudentThunk } from "../../store/thunks";

class StudentContainer extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchStudent(id);
  }

  render() {
    return (
      <div>
        <Header />
        <StudentView student={this.props.student} />
      </div>
    );
  }
}

const mapState = (state) => ({
  student: state.student,
});

const mapDispatch = (dispatch) => ({
  fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
});

export default connect(mapState, mapDispatch)(StudentContainer);

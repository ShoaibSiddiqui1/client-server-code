import Header from "./Header";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk, fetchAllCampusesThunk, editStudentThunk } from "../../store/thunks";
import { EditStudentView } from "../views";

class EditStudentContainer extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchStudent(id);
    this.props.fetchAllCampuses();
  }

  handleSubmit = async (student) => {
    await this.props.editStudent(student);
    this.props.history.push(`/student/${student.id}`);
  };

  render() {
    const { student, allCampuses } = this.props;

    if (!student || !student.id) {
      return (
        <div>
          <Header />
          <div className="main-content">
            <p>Loading...</p>
          </div>
        </div>
      );
    }

    return (
      <div>
        <Header />
        <EditStudentView student={student} campuses={allCampuses} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapState = (state) => ({
  student: state.student,
  allCampuses: state.allCampuses,
});

const mapDispatch = (dispatch) => ({
  fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
  fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
  editStudent: (student) => dispatch(editStudentThunk(student)),
});

export default connect(mapState, mapDispatch)(EditStudentContainer);

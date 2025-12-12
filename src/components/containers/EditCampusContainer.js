import Header from "./Header";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCampusThunk, editCampusThunk } from "../../store/thunks";
import { EditCampusView } from "../views";

class EditCampusContainer extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchCampus(id);
  }

  handleSubmit = async (campus) => {
    await this.props.editCampus(campus);
    this.props.history.push(`/campus/${campus.id}`);
  };

  render() {
    const { campus } = this.props;

    if (!campus || !campus.id) {
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
        <EditCampusView campus={campus} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapState = (state) => ({
  campus: state.campus,
});

const mapDispatch = (dispatch) => ({
  fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
  editCampus: (campus) => dispatch(editCampusThunk(campus)),
});

export default connect(mapState, mapDispatch)(EditCampusContainer);

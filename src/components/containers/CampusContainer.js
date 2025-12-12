import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { CampusView } from "../views";
import { fetchCampusThunk } from "../../store/thunks";

class CampusContainer extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchCampus(id);
  }

  render() {
    return (
      <div>
        <Header />
        <CampusView campus={this.props.campus} />
      </div>
    );
  }
}

const mapState = (state) => ({
  campus: state.campus,
});

const mapDispatch = (dispatch) => ({
  fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
});

export default connect(mapState, mapDispatch)(CampusContainer);

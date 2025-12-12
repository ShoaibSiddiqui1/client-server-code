import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { AllCampusesView } from "../views";
import { fetchAllCampusesThunk , deleteCampusThunk} from "../../store/thunks";

class AllCampusesContainer extends Component {
  componentDidMount() {
    this.props.fetchAllCampuses();
  }

  render() {
    return (
      <div>
        <Header />
        <AllCampusesView 
        campuses={this.props.allCampuses} 
        deleteCampus={this.props.deleteCampus}
        />
      </div>
    );
  }
}

const mapState = (state) => ({
  allCampuses: state.allCampuses,
});

const mapDispatch = (dispatch) => ({
  fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
  deleteCampus: (id) => dispatch(deleteCampusThunk(id)),
});



export default connect(mapState, mapDispatch)(AllCampusesContainer);

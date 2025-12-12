import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { NewCampusView } from "../views";
import { addCampusThunk } from "../../store/thunks";

const NewCampusContainer = (props) => {
  const { addCampus } = props;

  const handleAddCampus = async (campus) => {
    await addCampus(campus);
    props.history.push("/campuses");
  };

  return (
    <div>
      <Header />
      <NewCampusView addCampus={handleAddCampus} />
    </div>
  );
};

const mapDispatch = (dispatch) => ({
  addCampus: (campus) => dispatch(addCampusThunk(campus)),
});

export default connect(null, mapDispatch)(NewCampusContainer);

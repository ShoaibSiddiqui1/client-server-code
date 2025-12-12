import React from "react";
import { Link } from "react-router-dom";

const AllCampusesView = (props) => {
  const { campuses, deleteCampus } = props;

  return (
    <div className="main-content">
      <h1>All Campuses</h1>

      {!campuses.length && <p>There are no campuses.</p>}

      {campuses.map((campus) => (
        <div key={campus.id} className="card">
          <Link to={`/campus/${campus.id}`}>
            <h2>{campus.name}</h2>
          </Link>
          <h3>campus id: {campus.id}</h3>
          <p>{campus.address}</p>
          <p className="campus-description">{campus.description}</p>
          <button onClick={() => deleteCampus(campus.id)}>
            Delete Campus
          </button>
        
        </div>
        
      ))}

      <br />
      <Link to="/newcampus">
        <button className="btn-primary">Add New Campus</button>
      </Link>
    </div>
  );
};

export default AllCampusesView;

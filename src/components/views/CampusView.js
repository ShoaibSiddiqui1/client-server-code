import React from "react";
import { Link } from "react-router-dom";

const CampusView = (props) => {
  const { campus } = props;

  if (!campus || !campus.id) {
    return (
      <div className="main-content">
        <h1>Campus</h1>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="main-content">
      <h1>{campus.name}</h1>
      <p>{campus.address}</p>
      <p className="campus-description">{campus.description}</p>
      <Link to={`/campus/${campus.id}/edit`}>
        <button className="btn-primary">Edit Campus</button>
      </Link>


      <h2>Students</h2>
      {!campus.students || !campus.students.length ? (
        <p>No students currently enrolled at this campus.</p>
      ) : (
        campus.students.map((student) => {
          const name = `${student.firstName} ${student.lastName}`;
          return (
            <div key={student.id}>
              <Link to={`/student/${student.id}`}>
                <h3>{name}</h3>
              </Link>
            </div>
          );
        })
      )}
    </div>
  );
};

export default CampusView;

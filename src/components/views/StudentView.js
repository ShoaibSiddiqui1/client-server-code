import React from "react";
import { Link } from "react-router-dom";

const StudentView = (props) => {
  const { student } = props;

  if (!student || !student.id) {
    return (
      <div className="main-content">
        <h1>Student</h1>
        <p>Loading...</p>
      </div>
    );
  }

  const name = `${student.firstName} ${student.lastName}`;
  const campusName = student.campus ? student.campus.name : "No campus";

  return (
    <div className="main-content">
      <h1>{name}</h1>
      <Link to={`/student/${student.id}/edit`}>
         <button className="btn-primary">Edit Student</button>
      </Link>
      <h2>
        Campus:{" "}
        {student.campus ? (
          <Link to={`/campus/${student.campus.id}`}>
            {student.campus.name}
          </Link>
  ) : (
    "No campus"
  )}
</h2>
    </div>
  );
};

export default StudentView;

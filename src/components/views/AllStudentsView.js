import React from "react";
import { Link } from "react-router-dom";

const AllStudentsView = (props) => {
  const { students, deleteStudent } = props;

  return (
    <div className="main-content">
      <h1>All Students</h1>

      {!students.length && <p>There are no students.</p>}

      {students.map((student) => {
        const name = `${student.firstName} ${student.lastName}`;
        return (
          <div key={student.id} className="card">
            <Link to={`/student/${student.id}`}>
              <h2>{name}</h2>
            </Link>
            <button
              className="btn-danger"
              onClick={() => deleteStudent(student.id)}
            >
              Delete
            </button>
          </div>
        );
      })}

      <br />
      <Link to="/newstudent">
        <button className="btn-primary">Add New Student</button>
      </Link>
    </div>
  );
};

export default AllStudentsView;

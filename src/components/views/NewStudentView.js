import React, { useState } from "react";

const NewStudentView = (props) => {
  const { addStudent } = props;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gpa, setGpa] = useState("");
  const [campusId, setCampusId] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newStudent = {
      firstName,
      lastName,
      email,
      gpa: gpa === "" ? null : Number(gpa),
      campusId: campusId === "" ? null : Number(campusId),
    };

    addStudent(newStudent);
  };

  return (
    <div className="main-content">
      <h1>Add New Student</h1>

      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <label>Last Name:</label>
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

        <label>Email:</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
        />

        <label>GPA (0 – 4):</label>
        <input
          value={gpa}
          onChange={(e) => setGpa(e.target.value)}
          type="number"
          step="0.1"
          min="0"
          max="4"
        />

        <label>Campus ID (optional):</label>
        <input
          value={campusId}
          onChange={(e) => setCampusId(e.target.value)}
          type="number"
          min="1"
        />

        <div className="form-actions">
          <button type="submit" className="btn-primary">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewStudentView;

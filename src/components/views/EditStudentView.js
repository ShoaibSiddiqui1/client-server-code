import React, { useEffect, useState } from "react";

const EditStudentView = (props) => {
  const { student, campuses, onSubmit } = props;

  const [firstName, setFirstName] = useState(student.firstName || "");
  const [lastName, setLastName] = useState(student.lastName || "");
  const [email, setEmail] = useState(student.email || "");
  const [imageUrl, setImageUrl] = useState(student.imageUrl || "");
  const [gpa, setGpa] = useState(
    student.gpa === null || student.gpa === undefined ? "" : String(student.gpa)
  );
  const [campusId, setCampusId] = useState(student.campusId || "");

  // if student loads after first render
  useEffect(() => {
    setFirstName(student.firstName || "");
    setLastName(student.lastName || "");
    setEmail(student.email || "");
    setImageUrl(student.imageUrl || "");
    setGpa(student.gpa === null || student.gpa === undefined ? "" : String(student.gpa));
    setCampusId(student.campusId || "");
  }, [student]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedStudent = {
      id: student.id,
      firstName,
      lastName,
      email,
      imageUrl,
      gpa: gpa === "" ? null : Number(gpa),
      campusId: campusId === "" ? null : Number(campusId),
    };

    onSubmit(updatedStudent);
  };

  return (
    <div className="main-content">
      <h1>Edit Student</h1>

      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input value={firstName} onChange={(e) => setFirstName(e.target.value)} required />

        <label>Last Name:</label>
        <input value={lastName} onChange={(e) => setLastName(e.target.value)} required />

        <label>Email:</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />

        <label>Image URL:</label>
        <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />

        <label>GPA (0 – 4):</label>
        <input
          value={gpa}
          onChange={(e) => setGpa(e.target.value)}
          type="number"
          step="0.1"
          min="0"
          max="4"
        />

        <label>Campus:</label>
        <select value={campusId || ""} onChange={(e) => setCampusId(e.target.value)}>
          <option value="">No Campus</option>
          {campuses.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>

        <div className="form-actions">
          <button type="submit" className="btn-primary">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditStudentView;

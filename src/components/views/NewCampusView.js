import React, { useState } from "react";

const NewCampusView = (props) => {
  const { addCampus } = props;

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newCampus = {
      name,
      address,
      description,
    };

    addCampus(newCampus);
  };

  return (
    <div className="main-content">
      <h1>Add New Campus</h1>

      <form onSubmit={handleSubmit}>
        <label>Campus Name:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Address:</label>
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <label>Description (optional):</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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

export default NewCampusView;

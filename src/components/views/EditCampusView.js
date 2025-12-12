import React, { useEffect, useState } from "react";

const EditCampusView = (props) => {
  const { campus, onSubmit } = props;

  const [name, setName] = useState(campus.name || "");
  const [address, setAddress] = useState(campus.address || "");
  const [description, setDescription] = useState(campus.description || "");
  const [imageUrl, setImageUrl] = useState(campus.imageUrl || "");

  useEffect(() => {
    setName(campus.name || "");
    setAddress(campus.address || "");
    setDescription(campus.description || "");
    setImageUrl(campus.imageUrl || "");
  }, [campus]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedCampus = {
      id: campus.id,
      name,
      address,
      description,
      imageUrl,
    };

    onSubmit(updatedCampus);
  };

  return (
    <div className="main-content">
      <h1>Edit Campus</h1>

      <form onSubmit={handleSubmit}>
        <label>Campus Name:</label>
        <input value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Address:</label>
        <input value={address} onChange={(e) => setAddress(e.target.value)} required />

        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

        <label>Image URL:</label>
        <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />

        <div className="form-actions">
          <button type="submit" className="btn-primary">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCampusView;

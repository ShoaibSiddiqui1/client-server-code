import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header-title">Campus Management System</h1>
      <div className="nav-buttons">
        <Link to="/">
          <button className="btn-nav">HOME</button>
        </Link>
        <Link to="/campuses">
          <button className="btn-nav">ALL CAMPUSES</button>
        </Link>
        <Link to="/students">
          <button className="btn-nav">ALL STUDENTS</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;

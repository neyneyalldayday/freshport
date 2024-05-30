import React from "react";
import { Link, Outlet } from "react-router-dom";
const Root = () => {
  return (
    <>
      <ul className="nav">
        <li className="nav-list">
          <Link to="/" className="nav-item">home</Link>
        </li>       
        <li className="nav-list">
          <Link to="/projects" className="nav-item">Projects</Link>
        </li>
        <li className="nav-list">
          <Link to="/contact" className="nav-item">Contact</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Root;

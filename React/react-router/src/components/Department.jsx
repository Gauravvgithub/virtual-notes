import React from "react";
import { Link, Outlet } from "react-router";

const Department = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            <img
              src="https://t3.ftcdn.net/jpg/05/83/11/00/240_F_583110069_2Ini2N2vjvPsotTzyOiGqmsBqodUabRO.jpg"
              alt="logoImg"
              width="50"
              style={{borderRadius:"50%"}}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="student">
                  Student
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="mangement">
                  Mangement
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Department;

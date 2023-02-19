import React from "react";
import { NavLink } from "react-router-dom";
import { Admin } from "./Admin";
import ChatBox from "./ChatBox";

const activeStyle = {
  textDecoration: "none",
  backgroundColor: "#0000ff8d",
  width: "260px",
  display: "block",
  color: "white",
  borderRadius: "10px",
};

const inActiveStyle = {
  textDecoration: "none",
  color: "black",
};

const SideBar = () => {
  return (
    <div className="d-flex flex-column p-2" style={{ width: "300px" }}>
      <div className="fs-1 text-center w-100">NeuralMind</div>
      <div className="fs-3 text-center w-100 mt-5 ">
        <NavLink
          to="/train"
          style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
        >
          Train
        </NavLink>
      </div>
      <div className="fs-3 text-center w-100 mt-4">
        <NavLink
          to="/chat"
          style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
        >
          Chat
        </NavLink>
      </div>
      <div className="fs-3 text-center w-100 mt-4 ">
        <NavLink
          to="/admin"
          style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
        >
          Admin
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;

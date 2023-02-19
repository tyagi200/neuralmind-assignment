import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";

export const Admin = () => {
  return (
    <div className="d-flex justify-content-between">
      <div className="w-100">
        <Header />
        <div
          className="w-100  ps-5 pe-3 pt-2 d-flex flex-column "
          style={{ backgroundColor: "#ccccff55", height: "600px" }}
        >
          <h1>Admin</h1>
        </div>
      </div>
      <SideBar />
    </div>
  );
};

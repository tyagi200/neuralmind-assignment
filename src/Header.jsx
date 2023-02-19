import React from "react";
import { BsPerson, BsCaretDownFill } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <div className="container-fluid d-flex p-3 justify-content-end  ">
        <BsPerson style={{ fontSize: "30px" }} />
        <div className="d-flex align-items-center">
          <BsCaretDownFill />
        </div>
      </div>
      <hr className="mt-1" />
    </>
  );
};

export default Header;

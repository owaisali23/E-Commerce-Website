import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";
import "../index.css";

export const Footer = () => {
  return (
    <MDBFooter className=" Footer">
      <div
        className="text-center p-3 text-light"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} Copyright:{""}
        <p>E-Commerce App</p>
      </div>
    </MDBFooter>
  );
};

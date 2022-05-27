import React from "react";
import { Navbar } from "react-bootstrap";

export const Nav = () => {
  return (
    <Navbar>
      <Navbar.Brand href="/">
        <h4 className="home--container_title">Online Flight Booking</h4>
      </Navbar.Brand>
    </Navbar>
  );
};

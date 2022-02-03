import React from "react";
import "./NavBar.css";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../../orchid-single.png";

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light" sticky="top">
      <Navbar.Brand href="/signup">
        <img
          alt=""
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Red Orchid
      </Navbar.Brand>
      <Nav className="justify-content-end">
        <Nav.Link href="/dashboard">Home</Nav.Link>
        <Nav.Link href="/profile">My Profile</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;

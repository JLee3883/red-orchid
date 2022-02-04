import React from "react";
import "./NavBar.css";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../../orchid-single.png";
import Auth from "../../utils/auth";

const NavBar = () => {
  const logOut = () => {
    Auth.logout();
    window.location.replace("/signup");
  };
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
      {Auth.loggedIn() ? (
        <Nav className="justify-content-end">
          <Nav.Link href="/dashboard">Flow Talk</Nav.Link>
          <Nav.Link href="/profile">My Profile</Nav.Link>
          <Nav.Link onClick={logOut}>LogOut</Nav.Link>
        </Nav>
      ) : (
        ""
      )}
    </Navbar>
  );
};

export default NavBar;

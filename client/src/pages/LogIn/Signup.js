import React, { useState } from "react";
import { Card, Nav, Tab } from "react-bootstrap";
import Login from "../../components/LoginSignin/Login";
import Register from "../../components/LoginSignin/Register";
import NavBar from "../../components/navbar/NavBar";
import "./Login.css";

const SignUp = () => {
  const [setShowCard] = useState(false);

  return (
    <>
      <div className="signupbody">
        <NavBar />
        <Card style={{ margin: "45px auto" }}>
          <Tab.Container defaultActiveKey="login">
            <Card.Header closeButton>
              <Card.Title id="signup-Card">
                <Nav variant="tabs">
                  <Nav.Item>
                    <Nav.Link eventKey="login">Login</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="register">Register</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Tab.Content>
                <Tab.Pane eventKey="login">
                  <Login handleCardClose={() => setShowCard(false)} />
                </Tab.Pane>
                <Tab.Pane eventKey="register">
                  <Register handleCardClose={() => setShowCard(false)} />
                </Tab.Pane>
              </Tab.Content>
            </Card.Body>
          </Tab.Container>
        </Card>
      </div>
    </>
  );
};

export default SignUp;

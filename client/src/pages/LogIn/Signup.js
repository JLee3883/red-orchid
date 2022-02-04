import React, { useState, useEffect } from "react";
import { Card, Nav, Tab } from "react-bootstrap";
import Login from "../../components/LoginSignin/Login";
import Register from "../../components/LoginSignin/Register";
import NavBar from "../../components/navbar/NavBar";
import "./Login.css";
import { ADD_USER } from "../../utils/mutations";
import { useMutation } from "@apollo/client";

const SignUp = () => {
  const [setShowCard] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [userFormData, setUserFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [validated] = useState(false);
  const [addUser, { error }] = useMutation(ADD_USER);
  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await signup({
        variables: { ...userFormData },
      });

      console.log(data);
      Auth.signup(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
    setUserFormData({
      email: "",
      username: "",
      password: "",
    });
  };

  return (
    <>
      <body>
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
      </body>
    </>
  );
};

export default SignUp;

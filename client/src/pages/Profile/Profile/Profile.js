import React from "react";
import { Card, Container } from "react-bootstrap";
import { Calendar } from "react-modern-calendar-datepicker";
import NavBar from "../../../components/navbar/NavBar";
import Tracker from "../../../components/Tracker/Tracker";
import "./Profile.css";

const Profile = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Card className="C-1" style={{ margin: "0 12rem", height: "32rem" }}>
          <Calendar />
        </Card>
        <Card className="C-2" style={{ height: "32rem" }}>
          <Tracker />
        </Card>
      </Container>
    </>
  );
};

export default Profile;

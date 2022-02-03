import React from "react";
import { Button, Card } from "react-bootstrap";
import DatePicker from "react-modern-calendar-datepicker";
import FormField from "../Forms/FormField";
import "../Tracker/Tracker.css";

const Tracker = () => {
  return (
      <>
      <div className="body">
    <Card className="tracker-card" style={{ margin: "0 auto" }}>
      <Card.Body>
        <Card.Title className="cardTitle"></Card.Title>
        <Card.Text className="textCard">
        <FormField label="Date"/>
        <FormField label="The Flow" />
        <FormField label="Pain Level" />
        <FormField label="Cravings" />
        <FormField label="Mood" />
        <FormField isMultiLine label="Notes"></FormField>
      <Button className="bt-pro">
          Submit
      </Button>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </>
  );
};

export default Tracker;

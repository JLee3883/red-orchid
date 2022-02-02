import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormField from "../Forms/FormField";

const Tracker = () => {
  return (
      <>
      <div className="body">
    <Card className="tracker-card" style={{ width: "25rem", height: "35rem" }}>
      <Card.Body>
        <Card.Title className="cardTitle">tracker</Card.Title>
        <Card.Text className="textCard">
        <FormField label="Date" as={Link} to='/datepicker'/>
        <FormField label="The Flow" />
        <FormField label="Pain Level" />
        <FormField label="Cravings" />
        <FormField label="Mood" />
        <FormField label="Notes" />
        </Card.Text>
      </Card.Body>
      <Button className="bt-trc" type="submit" variant="success">
          Submit
      </Button>
    </Card>
    </div>
    </>
  );
};

export default Tracker;

import React from "react";
import { Button, Card } from "react-bootstrap";
import FormField from "../Forms/FormField";

const Tracker = () => {
  return (
      <>
      <div className="body">
    <Card className="tracker-card" style={{ width: "25rem", height: "35rem", margin: "0 auto" }}>
      <Card.Body>
        <Card.Title className="cardTitle">tracker</Card.Title>
        <Card.Text className="textCard">
        <FormField label="Date"/>
        <FormField label="The Flow" />
        <FormField label="Pain Level" />
        <FormField label="Cravings" />
        <FormField label="Mood" />
        <FormField inMultiLine label="Notes" />
        </Card.Text>
      </Card.Body>
      <Button>
          Submit
      </Button>
    </Card>
    </div>
    </>
  );
};

export default Tracker;

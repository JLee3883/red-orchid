import React from "react";
import { Button, Card } from "react-bootstrap";
import FormField from "../Forms/FormField";

const Tracker = () => {
  return (
      <>
      <div className="body">
    <Card className="tracker-card" style={{ margin: "0 auto", height: "32rem" }}>
      <Card.Body>
        <Card.Title className="cardTitle"></Card.Title>
        <Card.Text className="textCard">
        <FormField label="Date"/>
        <FormField label="The Flow" />
        <FormField label="Pain Level" />
        <FormField label="Cravings" />
        <FormField label="Mood" />
        <FormField inMultiLine label="Notes" />
      <Button>
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

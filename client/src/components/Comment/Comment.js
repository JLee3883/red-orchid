import React from "react";
import { Card, Button } from "react-bootstrap";
import FormField from "../Forms/FormField";

const Comment = () => {
  return (
    <div className="comment-container" style={{ borderStyle: "solid" }}>
      <Card.Text
        className="commentText"
        style={{ borderStyle: "dashed", margin: "5px" }}
      >
        Comments should appear here
        <Card.Subtitle href="#" className="mb-2 text-muted commentAuthor">
          Comment Author
        </Card.Subtitle>
      </Card.Text>
      <FormField isMultiline label="Comment"></FormField>
      <Button variant="light" style={{ borderColor: "red" }}>
        Comment
      </Button>
    </div>
  );
};

export default Comment;

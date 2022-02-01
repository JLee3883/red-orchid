import React from "react";
import { Card } from "react-bootstrap";

const BlogCard = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title className="cardTitle">Card Title</Card.Title>
        <Card.Subtitle href="#" className="mb-2 text-muted cardAuthor">
          Card Author
        </Card.Subtitle>
        <Card.Text className="cardText">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
